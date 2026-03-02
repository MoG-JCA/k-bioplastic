# Design: Technology & Certification

## UI/UX Design

### 1. Hero Section
- **Background**: Primary color (`bg-[var(--primary)]`) with an SVG grid pattern.
- **Content**: Title "기술 & 인증" and subtitle highlighting "진짜 생분해 기술".

### 2. Biodegradation Principles
- **Layout**: 4-step vertical or horizontal layout with step numbers and descriptions.
- **Color Coding**: Each step has a distinct background color (green, blue, purple, orange).
- **Description**: Detailed explanation of Soil contact, Enzyme action, Metabolism, and Full decomposition.

### 3. Freshness Technology (MIAO/Quantum Mechanics)
- **Title**: "숨쉬는 필름 기술".
- **Grid**: 2-column layout.
  - Left: Three cards (Quantum Mechanics, Breathable Film, Ethylene gas control).
  - Right: Visual card "Fresh-keeping Technology" with an icon and summary.

### 4. Certification Showcase
- **Grid**: 2-column grid of cards.
  - Cards: Name, Organization, Content, and Significance.
  - Certifications: EL 724, ASTM D5511, OECD 207/208, SGS.
- **Styling**: Distinct colors for each certification category.

### 5. Technology Comparison
- **Table**: Responsive table comparing "Ecofade 솔루션" vs "PLA/PBAT" vs "산화분해".
- **Comparison Items**: Principle, Conditions, Period, End-product, Microplastics, Recyclability.
- **Summary Cards**: Three colored cards (green/yellow/red) summarizing each technology's pros and cons.

### 6. Safety & Environment
- **Grid**: 2-column layout (Human Safety vs Environmental Safety).
- **Lists**: Checklist of safety certifications and tests (FDA, SGS, OECD 207/208).

## Technical Implementation

### Components
- `Section`: Reusable layout component from `@/components/ui/Section`.
- `Container`: Standard width container.

### Data Structures
- `certifications`: Array of objects with name, organization, description, significance, and color.
- `comparisonData`: Array of objects for the table rows.

### Styles
- Tailwind CSS classes for layout, typography, and colors.
- Custom CSS variables for theme-consistent colors (`--primary`, `--muted-foreground`, etc.).

## Verification Plan
- [ ] Verify all certifications are listed correctly.
- [ ] Check if the comparison table is accurate according to current standards.
- [ ] Ensure the 4-step biodegradation principle is clearly explained.
- [ ] Test responsiveness of the comparison table and grid sections.
- [ ] Verify safety information is complete.
