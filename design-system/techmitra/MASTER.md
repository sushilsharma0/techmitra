# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.

---

**Project:** TechMitra
**Updated:** 2026-09-23

---

## Brand

- **Name:** TechMitra (Tech + Mitra — technology friend / partner)
- **Primary:** Technology That Moves Nepal Forward.
- **Secondary:** Born in Nepal. Built for the World.
- **Story:** Everest → Nepal → Wonders → Digital Nepal → TechMitra → Technology → Products → Global → Everest

## Color Palette

| Role | Hex | Token |
|------|-----|-------|
| Midnight Navy | `#050B18` | `--color-midnight` |
| Deep Navy | `#081426` | `--color-deep-navy` |
| Deep Blue | `#0B2A5B` | `--color-deep-blue` |
| Electric Blue | `#1677FF` | `--color-electric` |
| Cyan | `#00D9FF` | `--color-cyan` |
| Himalayan White | `#F4F7FA` | `--color-himalayan` |
| Muted Gray | `#94A3B8` | `--color-muted` |
| Himalayan Gold | `#F5B942` | `--color-gold` |

Gold is reserved for sunrise accents and premium highlights only.

## Typography

- **Display:** Sora
- **Body:** Plus Jakarta Sans
- Large editorial headlines, short paragraphs, uppercase micro labels

## Style Direction

- Parallax storytelling / cinematic scroll (UI UX Pro Max)
- Dark cinematic technology aesthetic
- Avoid: excessive glow, glassmorphism, fake stats/testimonials, generic SaaS templates

## Motion Hierarchy

1. Major cinematic 3D transitions (GSAP + R3F)
2. Section movement
3. Component interaction
4. Micro-interactions (Anime.js)

Respect `prefers-reduced-motion`.

## CTA Hierarchy

1. Start a Project
2. Explore Our Work / View Case Study
3. Secondary contact links

## Accessibility Checklist

- [ ] Semantic landmarks and heading order
- [ ] Focus-visible states
- [ ] Keyboard navigation for menus and forms
- [ ] Contrast over 3D scenes (text scrims / solid overlays when needed)
- [ ] WebGL fallback content
- [ ] Reduced motion path
