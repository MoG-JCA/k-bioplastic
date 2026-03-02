# About & Cases Page Enhancement Design Document

> Version: 1.0.0 | Created: 2026-03-02 | Status: Draft

## 1. Overview
This design document specifies the implementation details for the About and Cases page enhancements. The goal is to provide a premium, interactive experience using scroll animations and mobile-first layout optimizations.

## 2. Animation Architecture
### Framer-motion Patterns
- **Standard Fade-In Slide-Up**: Used for section headers and text blocks.
  - `initial: { opacity: 0, y: 30 }`
  - `whileInView: { opacity: 1, y: 0 }`
  - `viewport: { once: true, amount: 0.2 }`
  - `transition: { duration: 0.8, ease: "easeOut" }`
- **Staggered Children**: Used for grids of cards (Why Us, Major Brands, Product Cards).
  - `container: { transition: { staggerChildren: 0.2 } }`
  - `child: { initial: { opacity: 0, scale: 0.95 }, whileInView: { opacity: 1, scale: 1 } }`

## 3. UI Components Enhancements
### About Page (`app/about/page.tsx`)
- **Hero**: Use `motion.h1` and `motion.p` for entry animations.
- **CEO Message**: 
  - Animate text paragraphs to appear sequentially.
  - Use `motion.div` for the signature part if applicable.
- **Company Profile**:
  - Desktop: Retain table-like grid but add hover highlight.
  - Mobile: Transform each row into a distinct card with a light background and icon for the "Title" column.
- **History/Milestones (New)**:
  - Vertical timeline for mobile.
  - Staggered left/right layout for desktop.
  - Content:
    - 2024.01: (주)에코바이오 설립
    - 2024.02: 연구개발전담부서 인정
    - 2024.04: 싱싱프레 브랜드 런칭
    - 2024.06: BADP 생분해 상온 분해 인증 (EL 724)
- **Why Us Cards**: 
  - Add `whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}`.
  - Enhance "4세대 솔루션" banner with a subtle glow or animated background.

### Cases Page (`app/cases/page.tsx`)
- **Product Rows**:
  - Stagger image and text appearance from opposite sides (`x: -50` vs `x: 50`).
  - Mobile: Smooth stack transition.
- **B2B Solution Grid**:
  - Enhance card border and shadow transition on hover.
  - Add staggered entrance for the 3 major B2B categories.

## 4. Mobile Layout Optimization
### Responsive Grid
- Use `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` consistently.
- Ensure padding is consistent: `px-6 py-12` for mobile, `px-12 py-24` for desktop.
- Company Profile Table conversion:
  ```tsx
  <div className="md:hidden space-y-4">
    {profileData.map(item => (
      <div className="p-4 bg-gray-50 rounded-xl">
        <div className="text-xs font-bold text-gray-500 uppercase">{item.label}</div>
        <div className="mt-1 text-gray-900">{item.value}</div>
      </div>
    ))}
  </div>
  ```

## 5. Visual Style Guide
- **Shadows**: `shadow-md` as default, `shadow-xl` on hover.
- **Gradients**: `bg-gradient-to-br from-green-50 to-blue-50` for subtle section backgrounds.
- **Icons**: Use SVG or simple emojis consistent with current design.
- **Borders**: `border border-gray-100` as default, `border-green-100` on highlight/hover.

## 6. Test Plan
| Test Case | Expected Result |
|-----------|-----------------|
| Scroll Animation | Sections animate smoothly only when entering the viewport. |
| Mobile Navigation | History timeline remains readable on 360px width. |
| Hover Interactivity | Cards respond to hover with lift and shadow effects. |
| Page Performance | No noticeable lag during scrolling (Chrome Performance profile). |
