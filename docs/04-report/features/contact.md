# PDCA Report: Contact Feature (문의하기)

> Version: 1.0.0 | Completed: 2026-03-01 | Status: Success

## 1. 개요 (Overview)
- **기능명**: 문의하기 (Contact Form)
- **목적**: 웹사이트 방문자와의 신속하고 정확한 비즈니스 소통을 위한 체계적인 문의 접수 시스템 구축.
- **주요 구현 사항**:
  - 문의 유형별(일반, BADP, MIAO) 동적 필드 렌더링.
  - Zod를 이용한 클라이언트/서버 이중 유효성 검사.
  - SMTP(로컬 Postfix) 연동을 통한 실시간 이메일 알림.
  - LRU-Cache 기반의 IP별 속도 제한(Rate Limiting) 적용.

## 2. 구현 상세 (Implementation Details)

### Frontend (`components/ContactForm.tsx`)
- **UI/UX**: Tailwind CSS를 활용한 모던하고 직관적인 디자인. 문의 유형 전환 시 애니메이션 효과(fadin/slide-in) 적용.
- **유효성 검사**: `zod` 라이브러리를 통해 이메일 형식, 전화번호 패턴(9-15자), 필수 필드 누락 등을 즉각적으로 피드백.
- **제출 관리**: `isSubmitting` 상태를 통한 중복 제출 방지 및 로딩 스피너 표시. 성공 시 사용자 경험 향상을 위한 완료 메시지 뷰로 전환 및 스크롤 최상단 이동.

### Backend (`app/api/contact/route.ts`)
- **보안**: `lru-cache`를 사용하여 동일 IP당 시간당 최대 5회 제출로 제한하여 스팸 공격 방지.
- **데이터 검증**: 클라이언트와 동일한 Zod 스키마를 사용하여 서버 사이드에서 최종 데이터 무결성 확인.
- **메일 발송**: `nodemailer`를 사용하여 구조화된 HTML 형식의 이메일 제작 및 발송. 디자인이 가미된 테이블 형식을 통해 가독성 확보.

## 3. 성공 기준 달성 여부 (Success Criteria)

| 성공 기준 | 달성 여부 | 비고 |
|-----------|-----------|------|
| 모든 문의 유형 필드 전달 | **달성** | 일반, BADP, MIAO 각각의 고유 필드가 이메일에 포함됨 |
| 유효성 검사 및 에러 메시지 | **달성** | Zod 기반의 구체적인 에러 메시지 노출 확인 |
| 속도 제한(Rate Limiting) | **달성** | 1시간 내 5회 초과 시 429 에러 반환 확인 |
| 반응형 레이아웃 | **달성** | 모바일, 태블릿, 데스크톱에서 정상 렌더링 확인 |

## 4. 리스크 관리 결과 (Risk Management)
- **메일 발송 신뢰성**: `.env.local` 설정을 통해 로컬 Postfix(Port 25)와 연동하였으며, `tls: { rejectUnauthorized: false }` 옵션으로 보안 인증서가 없는 로컬 환경에서도 안정적인 연결 확보.
- **개인정보 보호**: 사용자로부터 명시적인 개인정보 수집 동의를 필수로 받았으며, 수집된 데이터는 이메일 발송 후 DB에 저장하지 않아 노출 리스크를 원천 차단함.

## 5. 향후 개선 사항 (Future Improvements)
- **DB 로깅**: 운영 규모가 커질 경우, 메일 유실 대비를 위한 전용 DB 저장소(예: PostgreSQL) 연동 고려.
- **첨부 파일**: 견적 산출을 위한 도면이나 제안서 업로드 기능 추가 필요성 검토.
- **공통 검증 로직**: 현재 중복 정의된 Zod 스키마를 `lib/validations.ts`와 같이 공통 모듈로 분리하여 유지보수성 향상.

---
**보고자**: Gemini CLI (Autonomous Agent)
**승인**: User (PDCA Cycle 완료)
