import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'
import { Container } from '../ui/primitives'
import { cn } from '../../utils/math'

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta = { label: 'Start a Project', to: '/contact' },
  secondaryCta,
  className,
}) {
  return (
    <section className={cn('relative overflow-hidden pb-16 pt-32 md:pb-20 md:pt-40', className)}>
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(22,119,255,0.18),transparent_45%),radial-gradient(ellipse_at_bottom_right,rgba(0,217,255,0.08),transparent_40%)]"
        aria-hidden
      />
      <Container className="relative">
        <div className="content-scrim content-scrim--wide">
          {eyebrow && <p className="label-micro mb-4 text-cyan">{eyebrow}</p>}
          <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-shadow-readable md:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base text-body md:text-lg">{description}</p>
          )}
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={primaryCta.to}>{primaryCta.label}</Button>
            {secondaryCta && (
              <Button href={secondaryCta.to} variant="secondary" icon={false}>
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}

export function PageCTA({
  title = "Let's Build It.",
  description = "Tell us what you're building. We'll help turn the idea into a digital product.",
}) {
  return (
    <section className="section-solid relative z-[var(--z-content)] py-24">
      <Container>
        <div className="content-scrim content-scrim--wide">
          <p className="label-micro text-gold">Next step</p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl">{title}</h2>
          <p className="mt-4 max-w-xl text-body">{description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact">Start a Project</Button>
            <Button href="/work" variant="secondary" icon={false}>
              Explore Our Work
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export function usePageTitle(title) {
  useEffect(() => {
    const prev = document.title
    document.title = title
      ? `${title} — TechMitra`
      : 'TechMitra — Technology That Moves Nepal Forward'
    return () => {
      document.title = prev
    }
  }, [title])
}

export function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-body">
        <li>
          <Link to="/" className="hover:text-himalayan">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <span className="text-muted" aria-hidden>
              /
            </span>
            {item.to ? (
              <Link to={item.to} className="hover:text-himalayan">
                {item.label}
              </Link>
            ) : (
              <span className="text-himalayan">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
