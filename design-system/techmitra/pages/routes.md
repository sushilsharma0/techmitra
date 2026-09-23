# Design System — Page Routes

Overrides MASTER for multi-page IA.

## Routes

| Path | Page | Purpose |
|------|------|---------|
| `/` | Home | Cinematic Everest story experience |
| `/services` | Services | Full capability catalog + process |
| `/solutions` | Solutions | Business stages + industries + products |
| `/work` | Work | Case studies + product platforms |
| `/about` | About | Mission, vision, values, process |
| `/insights` | Insights | Editorial articles |
| `/careers` | Careers | Real openings only + benefits |
| `/contact` | Contact | Form + studio details |

## Shared chrome

- `.site-shell` gutters on every page
- `PageHero` dark cinematic hero → `.band-light` / `.band-dark` content bands
- `PageCTA` navy band before footer (except Contact)
- Gold `accent` CTAs for conversion; cyan labels for hierarchy
- Active `NavLink` states in navbar
- Careers linked in nav + footer (empty openings until real roles exist)

## Rules

- No fake testimonials, stats, or invented job openings
- Maintain Himalayan navy / cyan / gold accents
- Internal navigation via React Router `Link`
