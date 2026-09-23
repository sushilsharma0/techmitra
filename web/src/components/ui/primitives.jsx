import { cn } from '../../utils/math'

/** Same horizontal margins as Navbar — class defined in index.css */
export function Container({ children, className, as: Comp = 'div' }) {
  return <Comp className={cn('site-shell', className)}>{children}</Comp>
}

export function Badge({ children, className }) {
  return (
    <span
      className={cn(
        'label-micro inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-cyan',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  scrim = true,
  className,
}) {
  const body = (
    <>
      {eyebrow && (
        <p
          className={cn(
            'label-micro mb-4',
            light ? 'text-electric' : 'text-cyan',
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          'text-3xl md:text-5xl lg:text-[3.25rem] text-balance text-shadow-readable',
          light ? 'text-deep-navy' : 'text-himalayan',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-5 text-base md:text-lg leading-relaxed max-w-2xl',
            align === 'center' && 'mx-auto',
            light ? 'text-slate-700' : 'text-body',
          )}
        >
          {description}
        </p>
      )}
    </>
  )

  if (light || !scrim) {
    return (
      <div
        className={cn(
          'w-full max-w-3xl',
          align === 'center' && 'mx-auto text-center',
          className,
        )}
      >
        {body}
      </div>
    )
  }

  return (
    <div
      className={cn(
        'content-scrim w-full',
        align === 'center' && 'content-scrim--center',
        className,
      )}
    >
      {body}
    </div>
  )
}

export function Card({ children, className, as: Comp = 'div' }) {
  return (
    <Comp
      className={cn(
        'surface-dark rounded-xl p-6 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-0.5',
        className,
      )}
    >
      {children}
    </Comp>
  )
}
