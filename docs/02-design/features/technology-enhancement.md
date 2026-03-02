# Technology Enhancement Design Document

> Version: 1.1.0 | Created: 2026-03-01 | Status: Draft

## 1. Overview
This document outlines the technical design for enhancing the Technology page (`app/technology/page.tsx`). The focus is on visual storytelling through animations, credibility through certification logos, and accessibility via a truly responsive comparison table.

## 2. Architecture
### System Diagram
- **Frontend**: Next.js 16 (App Router)
- **Animation Engine**: Framer Motion
- **Styling**: Tailwind CSS
- **Assets**: Public directory for certification logos (`/public/images/about/`)

### Components
- `TechnologyPage`: Main container component.
- `BiodegradationSection`: Enhanced with staggered scroll animations.
- `CertificationGrid`: Updated to display high-quality logos with consistent aspect ratios.
- `ResponsiveComparisonTable`: Refactored to support a sticky first column on mobile.

## 3. Data Model
### Entities
```typescript
interface Certification {
  name: string;
  organization: string;
  description: string;
  significance: string;
  color: 'green' | 'blue' | 'purple' | 'orange';
  image: string; // Path to logo/certificate image
}

interface ComparisonRow {
  category: string;
  badp: string; // Ecofade Solution
  pla: string;  // PLA/PBAT
  oxo: string;  // Oxidative degradation
}
```

## 4. UI Design
### Animations (Framer Motion)
- **Staggered Entrance**: Apply `staggerChildren` to the Biodegradation steps to create a "flow" effect as the user scrolls.
- **View-trigger**: Use `viewport={{ once: false, amount: 0.3 }}` to allow animations to re-trigger or feel more dynamic, but keep `once: true` for main headers to avoid distraction.
- **Transition**: Use `type: "spring", stiffness: 100, damping: 20` for a more natural feel than simple linear fades.

### Certification Logos
- **Layout**: 2x2 grid on desktop, 1x1 on mobile.
- **Image Container**: Fixed aspect ratio (e.g., `aspect-video` or `aspect-square`) with `object-contain` to ensure logos are not cropped.
- **Visual Priority**: EL 724 should be the most prominent.

### Mobile Table (Responsive Comparison)
- **Sticky Column**: The "Category" (비교 항목) column will use `sticky left-0` and a higher `z-index`.
- **Visual Cue**: Add a subtle shadow to the sticky column when scrolling horizontally to indicate depth.
- **Highlight**: The "Ecofade" column will have a light green background and bold text to emphasize the product's advantages.

## 5. Implementation Strategy
1.  **Phase 1: Asset Preparation**: Ensure `cert_el724.jpg`, `cert_rnd.jpg`, and `cert_patent.jpg` are correctly referenced.
2.  **Phase 2: Animation Refinement**: Update `fadeIn` and `staggerContainer` variants. Add specific variants for the 4-step biodegradation process.
3.  **Phase 3: Table Refactor**: Update the `table` structure in `app/technology/page.tsx` to include `sticky` classes and better mobile hints.
4.  **Phase 4: Validation**: Test on multiple viewport widths (375px, 768px, 1024px, 1440px).

## 6. Test Plan
| Test Case | Expected Result |
|-----------|-----------------|
| Staggered Steps | Step 1, 2, 3, 4 appear sequentially as they enter the viewport. |
| Logo Aspect Ratio | Certification logos are clear and not distorted on any device. |
| Sticky Header/Column | Category column remains visible while swiping right on mobile. |
| Contrast Accessibility | Text in the highlighted "Ecofade" column is easily readable (Contrast ratio > 4.5:1). |
