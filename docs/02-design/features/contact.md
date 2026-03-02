# PDCA Design: Contact Feature (문의하기)

> Version: 1.0.0 | Created: 2026-03-01 | Status: Draft

## 1. 개요 (Overview)
- **목적**: 웹사이트 방문자의 다양한 문의를 체계적으로 접수하고, 담당자에게 실시간으로 전달하는 신뢰성 있는 소통 채널 구축.
- **주요 개선 사항**:
  - 클라이언트 사이드 검증 강화 (Zod).
  - 문의 유형별 맞춤형 이메일 템플릿 적용.
  - 서버 사이드 보안 (Rate Limiting) 및 에러 핸들링 고도화.
  - 로컬 Postfix 연동을 통한 실제 메일 발송 환경 구축.

## 2. 아키텍처 (Architecture)

### 시스템 다이어그램
1. **User** -> **ContactForm (Client)**: 문의 내용 입력 및 유효성 검사.
2. **ContactForm** -> **Next.js API Route (/api/contact)**: JSON 데이터 전송.
3. **API Route** -> **Nodemailer**: 데이터 가공 및 메일 전송 요청.
4. **Nodemailer** -> **Local Postfix (Port 25)**: SMTP 릴레이.
5. **Postfix** -> **Target Email (jca@ecofade.co.kr)**: 최종 메일 전달.

### 컴포넌트 구조
- `ContactForm.tsx`: 문의 유형 선택 및 동적 필드 렌더링.
- `app/api/contact/route.ts`: 속도 제한, 유효성 검사, 메일 발송 로직 처리.

## 3. 데이터 모델 (Data Model)

### Zod 스키마 정의
```typescript
const baseSchema = z.object({
  company: z.string().min(1, "회사명을 입력해주세요."),
  name: z.string().min(1, "담당자명을 입력해주세요."),
  email: z.string().email("유효한 이메일 주소를 입력해주세요."),
  phone: z.string().regex(/^[\d-]{9,15}$/, "유효한 연락처를 입력해주세요."),
  message: z.string().min(5, "문의 내용을 5자 이상 입력해주세요."),
  privacy: z.literal(true, {
    errorMap: () => ({ message: "개인정보 수집 및 이용에 동의해야 합니다." }),
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
```

## 4. API 사양 (API Specification)

### POST `/api/contact`
- **Request Body**: `contactFormSchema`에 부합하는 JSON 객체.
- **Response**:
  - `200 OK`: `{ message: "Email sent successfully" }`
  - `400 Bad Request`: `{ error: "Validation failed", details: [...] }`
  - `429 Too Many Requests`: `{ error: "Too many requests" }`
  - `500 Internal Server Error`: `{ error: "Failed to send email" }`

## 5. UI 디자인 및 UX (UI Design)
- **문의 유형 전환**: 탭 버튼 형식으로 직관적인 전환 제공.
- **동적 필드**:
  - BADP: 체크박스 그룹 (제품), 텍스트 입력 (규격, 수량).
  - MIAO: 드롭다운 (플라스틱 종류), 텍스트 입력 (생산 제품).
- **상태 피드백**:
  - 제출 중: 버튼 비활성화 및 Loading Spinner.
  - 완료: 성공 메시지 뷰로 전환.
  - 에러: 얼럿(Alert) 또는 인라인 에러 메시지 표시.

## 6. 테스트 플랜 (Test Plan)

| 테스트 케이스 | 기대 결과 |
|---------------|-----------|
| 필수 필드 미입력 제출 | 클라이언트/서버 검증 에러 발생 |
| 잘못된 이메일 형식 | "유효한 이메일 주소를 입력해주세요" 메시지 표시 |
| 1시간 내 6회 이상 제출 | 429 에러 반환 및 차단 확인 |
| BADP 유형 제품 미선택 | "최소 하나 이상의 제품을 선택해주세요" 에러 표시 |
| 정상 제출 | 담당자 이메일로 HTML 형식의 문의 메일 수신 확인 |

## 7. 환경 변수 설정 (.env)
```bash
# SMTP 설정 (로컬 Postfix 기준)
SMTP_HOST=localhost
SMTP_PORT=25
SMTP_FROM="EcoBio Web <noreply@ecofade.co.kr>"
CONTACT_RECEIVER="jca@ecofade.co.kr"
```
