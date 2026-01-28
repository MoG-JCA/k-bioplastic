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

// Validation Schema
const contactSchema = z.object({
  inquiryType: z.string().min(1, "문의 유형을 선택해주세요."),
  company: z.string().min(1, "회사명을 입력해주세요."),
  name: z.string().min(1, "담당자명을 입력해주세요."),
  email: z.string().email("유효한 이메일 주소를 입력해주세요."),
  phone: z.string().min(1, "연락처를 입력해주세요."),
  message: z.string().min(10, "문의 내용은 최소 10자 이상 입력해주세요."),
}).passthrough(); // Allow other properties (details)

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
    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: validationResult.error.flatten() },
        { status: 400 }
      );
    }

    const { inquiryType, company, name, email, phone, message, ...details } = body;

    // Create a transporter
    // Note: In a real production environment, these should be environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || '"EcoBio Web" <noreply@ecobio.co.kr>',
      to: 'jca@ecofade.co.kr',
      subject: `[(주)에코바이오] 새로운 문의가 접수되었습니다 - ${company} (${name})`,
      html: `
        <h2>새로운 문의가 접수되었습니다.</h2>
        <p><strong>문의 유형:</strong> ${inquiryType.toUpperCase()}</p>
        
        <h3>기본 정보</h3>
        <ul>
          <li><strong>회사명:</strong> ${company}</li>
          <li><strong>담당자:</strong> ${name}</li>
          <li><strong>이메일:</strong> ${email}</li>
          <li><strong>연락처:</strong> ${phone}</li>
        </ul>

        <h3>문의 내용</h3>
        <p style="white-space: pre-wrap;">${message}</p>

        ${Object.keys(details).length > 0 ? `
          <h3>상세 정보</h3>
          <ul>
            ${Object.entries(details).map(([key, value]) => `
              <li><strong>${key}:</strong> ${Array.isArray(value) ? value.join(', ') : value}</li>
            `).join('')}
          </ul>
        ` : ''}
      `,
    };

    // Send email
    // Only try to send if credentials are provided, otherwise just log
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } else {
      console.log('SMTP credentials not found. Mocking email send.');
      console.log('Email content:', mailOptions);
      // Simulate success for demo purposes if no credentials
      return NextResponse.json({ message: 'Email sent successfully (Mock)' }, { status: 200 });
    }

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
