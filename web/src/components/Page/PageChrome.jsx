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
  visual,
  className,
}) {
  return (
    <section className={cn('page-hero pb-16 pt-28 md:pb-24 md:pt-36', className)}>
      <Container>
        <Breadcrumb
          items={eyebrow ? [{ label: typeof eyebrow === 'string' ? eyebrow : 'Page' }] : []}
          tone="dark"
        />
        <div className="mt-6 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            {eyebrow && <p className="label-micro mb-4 text-cyan">{eyebrow}</p>}
            <h1 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-himalayan md:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
              {title}
            </h1>
            {description && (
              <p className="mt-5 max-w-xl text-base leading-relaxed text-body md:text-lg">
                {description}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={primaryCta.to} variant="accent" icon>
                {primaryCta.label}
              </Button>
              {secondaryCta && (
                <Button href={secondaryCta.to} variant="secondary">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          </div>
          <div className="page-hero-visual flex items-center justify-center p-8 md:min-h-[280px]">
            {visual || <DefaultHeroVisual />}
          </div>
        </div>
      </Container>
    </section>
  )
}

function DefaultHeroVisual() {
  return (
    <div className="relative z-10 w-full max-w-sm text-center">
      <div className="mx-auto h-24 w-40 rounded-t-full bg-gradient-to-t from-deep-blue to-cyan/40 opacity-90" />
      <div className="mx-auto -mt-6 h-3 w-48 rounded-full bg-gold/80 shadow-[0_0_30px_rgba(245,185,66,0.45)]" />
      <p className="mt-8 font-display text-sm tracking-[0.2em] text-cyan/80">TECHMITRA</p>
      <p className="mt-2 text-xs text-body">Nepal → Digital → Global</p>
    </div>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  light = false,
  align = 'left',
  className,
}) {
  return (
    <div
      className={cn(
        'mb-10 max-w-3xl md:mb-12',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <p className={cn('label-micro mb-3', light ? 'text-electric' : 'text-cyan')}>
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'font-display text-3xl md:text-4xl lg:text-[2.75rem]',
          light ? 'text-deep-navy' : 'text-himalayan',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-base md:text-lg',
            light ? 'text-slate-600' : 'text-body',
            align === 'center' && 'mx-auto max-w-2xl',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export function PageCTA({
  title = "Let's Build It.",
  description = "Tell us what you're building. We'll help turn the idea into a digital product.",
}) {
  return (
    <section className="band-navy relative py-20 md:py-24">
      <Container>
        <div className="grid items-center gap-8 rounded-2xl border border-white/10 bg-midnight/50 p-8 md:grid-cols-[1.4fr_auto] md:p-12">
          <div>
            <p className="label-micro text-gold">Next step</p>
            <h2 className="mt-3 font-display text-3xl text-himalayan md:text-4xl">{title}</h2>
            <p className="mt-4 max-w-xl text-body">{description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href="/contact" variant="accent" icon>
              Start a Project
            </Button>
            <Button href="/work" variant="secondary">
              Explore Work
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

export function Breadcrumb({ items = [], tone = 'dark' }) {
  if (!items.length) return null
  const muted = tone === 'light' ? 'text-slate-500' : 'text-body'
  const current = tone === 'light' ? 'text-deep-navy' : 'text-himalayan'
  const link = tone === 'light' ? 'hover:text-electric' : 'hover:text-himalayan'

  return (
    <nav aria-label="Breadcrumb">
      <ol className={cn('flex flex-wrap items-center gap-2 text-xs', muted)}>
        <li>
          <Link to="/" className={link}>
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <span aria-hidden>/</span>
            {item.to ? (
              <Link to={item.to} className={link}>
                {item.label}
              </Link>
            ) : (
              <span className={current}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
