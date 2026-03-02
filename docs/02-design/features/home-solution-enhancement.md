# Home and Solution Enhancement Design Document

> Version: 1.0.0 | Created: 2026-03-02 | Status: Draft

## 1. Overview
메인화면(Home) 및 각각의 솔루션(Solution) 상세 페이지의 시각적 완성도와 사용자 경험을 고도화하기 위한 디자인 명세입니다. Framer-motion을 통한 동적 애니메이션 적용과 모바일 최적화, 프리미엄 UI 디테일 강화를 목표로 합니다.

## 2. Architecture

### Animation Strategy (Framer-motion)
- **Shared Patterns**:
    - `FadeUp`: `initial={{ opacity: 0, y: 30 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true }}`, `transition={{ duration: 0.8, ease: "easeOut" }}`
    - `StaggerChildren`: `transition: { staggerChildren: 0.2 }`를 부모 요소에 적용하여 하위 요소들이 순차적으로 나타나게 함.
    - `ScaleHover`: `whileHover={{ scale: 1.02 }}`, `transition={{ type: "spring", stiffness: 300 }}`

### Components to Update
- **Home Components**:
    - `HeroSection`: 텍스트 및 버튼 등장 애니메이션, 배경 이미지 슬라이드 효과.
    - `ProblemSection`: 카드 섹션 FadeUp 및 아이콘 포인트 애니메이션.
    - `SolutionSection`: 솔루션 카드 Stagger 등장, 카드 Hover 효과 강화.
    - `CredibilitySection`: 인증 마크 순차적 등장 효과.
    - `CTASection`: 배경 그라데이션 및 버튼 강조 애니메이션.
- **Solution Pages**:
    - `BADP Hero`: 배경 그리드 및 텍스트 시각적 강조.
    - `MIAO Hero`: 브랜드 컬러(Blue)를 활용한 프리미엄 디자인 강화.
    - `Mechanism Section (MIAO)`: 작동 원리 단계별 애니메이션.
    - `Comparison Table (BADP)`: 스크롤 시 하이라이트 효과.

## 3. UI Design Specifications

### Color & Typography
- **Home**: Green-600 (Primary)를 기점으로 자연스럽고 신뢰감 있는 톤 유지.
- **Solution (BADP)**: Green 계열 강조, 자연 친화적 이미지 활용.
- **Solution (MIAO)**: Blue 계열 강조, 기술적이고 혁신적인 이미지 활용.
- **Typography**: `leading-tight` 및 `tracking-tight`를 활용하여 제목의 긴장감 부여, 모바일에서는 폰트 크기를 적절히 축소(`text-3xl` ~ `text-4xl`).

### Responsive Details
- **Mobile (sm)**: `px-4`, `py-12`, `gap-6`, `grid-cols-1`.
- **Tablet (md)**: `px-8`, `py-20`, `gap-8`, `grid-cols-2`.
- **Desktop (lg+)**: `max-w-7xl`, `px-12`, `py-24`, `gap-12`.

## 4. Implementation Plan

### Step 1: Framework Setup
- `framer-motion` 라이브러리 설치 확인 (이미 설치된 것으로 가정, 확인 필요).
- 공통 애니메이션 변수(Variants) 정의.

### Step 2: Home Page Refinement
- 각 섹션 컴포넌트에 `motion` 요소 적용.
- `viewport={{ once: true }}` 설정을 통해 초기 로딩 시에만 애니메이션 실행하여 성능 최적화.
- 모바일 가독성 재점검 및 `Section` 컴포넌트 여백 튜닝.

### Step 3: Solution Pages Refinement
- BADP 및 MIAO 상세 페이지의 Hero 섹션 및 주요 컨텐츠 영역 고도화.
- 리스트 아이템 및 카드형 요소들에 애니메이션 일관 적용.

## 5. Test Plan
| Test Case | Expected Result |
|-----------|-----------------|
| 스크롤 애니메이션 확인 | 섹션 진입 시 부드럽게 FadeUp 효과가 발생하는가 |
| 모바일 레이아웃 확인 | 아이폰/안드로이드 주요 해상도에서 레이아웃 깨짐이 없는가 |
| 버튼 인터랙션 확인 | 버튼 Hover 시 적절한 피드백(Scale/Color)이 있는가 |
| 성능 테스트 | 애니메이션 적용 후에도 스크롤 및 전환 속도가 빠른가 |
| 가독성 확인 | 모바일에서 텍스트가 너무 작거나 여백이 좁지 않은가 |
