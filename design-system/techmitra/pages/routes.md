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
| `/insights` | Insights | Editorial articles (light contrast band) |
| `/contact` | Contact | Form + studio details |

## Shared chrome

- `.site-shell` gutters on every page
- `PageHero` with content-scrim
- `PageCTA` band before footer (except Contact)
- Active `NavLink` states in navbar

## Rules

- No fake testimonials or stats
- Maintain Himalayan navy / cyan / gold accents
- Internal navigation via React Router `Link`
