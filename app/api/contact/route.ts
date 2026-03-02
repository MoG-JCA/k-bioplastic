import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { LRUCache } from 'lru-cache';

// Rate Limiter Setup
const rateLimit = new LRUCache<string, number>({
  max: 500, // Max 500 unique IPs
  ttl: 1000 * 60 * 60, // 1 hour window
});

const RATE_LIMIT_MAX = 5; // 5 requests per hour per IP

// Validation Schemas
const baseSchema = z.object({
  company: z.string().min(1, "회사명을 입력해주세요."),
  name: z.string().min(1, "담당자명을 입력해주세요."),
  email: z.string().email("유효한 이메일 주소를 입력해주세요."),
  phone: z.string().regex(/^[\d-]{9,15}$/, "유효한 연락처를 입력해주세요."),
  message: z.string().min(5, "문의 내용을 5자 이상 입력해주세요."),
  privacy: z.boolean().refine((val) => val === true, {
    message: "개인정보 수집 및 이용에 동의해야 합니다.",
  }),
});

const badpSchema = baseSchema.extend({
  inquiryType: z.literal("badp"),
  products: z.array(z.string()).min(1, "최소 하나 이상의 제품을 선택해주세요."),
  specifications: z.string().optional(),
  quantity: z.string().optional(),
});

const miaoSchema = baseSchema.extend({
  inquiryType: z.literal("miao"),
  resinType: z.string().min(1, "적용 대상 플라스틱을 선택해주세요."),
  mainProducts: z.string().min(1, "주요 생산 제품을 입력해주세요."),
});

const generalSchema = baseSchema.extend({
  inquiryType: z.literal("general"),
});

const contactFormSchema = z.discriminatedUnion("inquiryType", [
  generalSchema,
  badpSchema,
  miaoSchema,
]);

export async function POST(request: Request) {
  try {
    // 1. Rate Limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const currentUsage = rateLimit.get(ip) || 0;

    if (currentUsage >= RATE_LIMIT_MAX) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }
    rateLimit.set(ip, currentUsage + 1);

    // 2. Input Validation
    const body = await request.json();
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: validationResult.error.flatten() },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // 3. Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || '127.0.0.1',
      port: parseInt(process.env.SMTP_PORT || '25'),
      secure: false,
      ...(process.env.SMTP_USER && {
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        }
      }),
      tls: {
        rejectUnauthorized: false
      }
    });

    // 4. Email Content Mapping
    let typeLabel = "일반 문의";
    let extraRows = "";

    if (data.inquiryType === 'badp') {
      typeLabel = "생분해 생활솔루션 (BADP)";
      extraRows = `
        <tr><th style="text-align:left; padding:10px; border:1px solid #ddd;">필요 제품</th><td style="padding:10px; border:1px solid #ddd;">${data.products.join(', ')}</td></tr>
        <tr><th style="text-align:left; padding:10px; border:1px solid #ddd;">필요 규격</th><td style="padding:10px; border:1px solid #ddd;">${data.specifications || '-'}</td></tr>
        <tr><th style="text-align:left; padding:10px; border:1px solid #ddd;">예상 수량</th><td style="padding:10px; border:1px solid #ddd;">${data.quantity || '-'}</td></tr>
      `;
    } else if (data.inquiryType === 'miao') {
      typeLabel = "생분해 플라스틱솔루션 (MIAO)";
      extraRows = `
        <tr><th style="text-align:left; padding:10px; border:1px solid #ddd;">적용 플라스틱</th><td style="padding:10px; border:1px solid #ddd;">${data.resinType}</td></tr>
        <tr><th style="text-align:left; padding:10px; border:1px solid #ddd;">주요 생산 제품</th><td style="padding:10px; border:1px solid #ddd;">${data.mainProducts}</td></tr>
      `;
    }

    const mailOptions = {
      from: process.env.SMTP_FROM || '"EcoBio Web" <noreply@ecofade.co.kr>',
      to: process.env.CONTACT_RECEIVER || 'jca@ecofade.co.kr',
      subject: `[(주)에코바이오] ${typeLabel} 접수 - ${data.company} (${data.name})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">새로운 문의가 접수되었습니다.</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr><th style="text-align:left; padding:10px; border:1px solid #ddd; background:#f9fafb; width:140px;">문의 유형</th><td style="padding:10px; border:1px solid #ddd; font-weight:bold;">${typeLabel}</td></tr>
            <tr><th style="text-align:left; padding:10px; border:1px solid #ddd; background:#f9fafb;">회사명</th><td style="padding:10px; border:1px solid #ddd;">${data.company}</td></tr>
            <tr><th style="text-align:left; padding:10px; border:1px solid #ddd; background:#f9fafb;">담당자명</th><td style="padding:10px; border:1px solid #ddd;">${data.name}</td></tr>
            <tr><th style="text-align:left; padding:10px; border:1px solid #ddd; background:#f9fafb;">이메일</th><td style="padding:10px; border:1px solid #ddd;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><th style="text-align:left; padding:10px; border:1px solid #ddd; background:#f9fafb;">연락처</th><td style="padding:10px; border:1px solid #ddd;">${data.phone}</td></tr>
            ${extraRows}
          </table>

          <div style="margin-top: 30px;">
            <h3 style="color: #374151; border-left: 4px solid #059669; padding-left: 10px;">문의 내용</h3>
            <div style="padding: 15px; background: #f3f4f6; border-radius: 8px; white-space: pre-wrap; font-size: 15px; line-height: 1.6;">${data.message}</div>
          </div>

          <p style="margin-top: 40px; font-size: 12px; color: #6b7280; text-align: center;">본 메일은 (주)에코바이오 공식 홈페이지를 통해 발송되었습니다.</p>
        </div>
      `,
    };

    // 5. Send email
    // If SMTP_HOST is provided, we attempt to send. Defaulting to localhost:25 as per design.
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: `Failed to send email: ${errorMessage}` }, { status: 500 });
  }
}
