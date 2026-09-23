import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../utils/math'

function isInternalPath(href) {
  return typeof href === 'string' && href.startsWith('/') && !href.startsWith('//')
}

/**
 * Adapted from 21st.dev Motion Button (Shatlyk1011) — restyled for TechMitra.
 */
export const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary',
    href,
    className,
    icon = true,
    type = 'button',
    onClick,
    ...props
  },
  ref,
) {
  const classes = cn(
    'group relative inline-flex h-12 items-center overflow-hidden rounded-full border px-1 text-sm font-medium transition-colors duration-300 cursor-pointer focus-visible:outline-none',
    variant === 'primary' &&
      'border-electric/40 bg-deep-navy/80 text-himalayan hover:border-cyan/50',
    variant === 'secondary' &&
      'border-white/15 bg-transparent text-himalayan hover:border-white/35',
    variant === 'ghost' && 'border-transparent bg-transparent text-muted hover:text-himalayan',
    className,
  )

  const content = (
    <>
      {variant === 'primary' && (
        <span
          aria-hidden
          className="absolute left-1 top-1 block h-10 w-10 rounded-full bg-electric transition-all duration-500 group-hover:w-[calc(100%-0.5rem)]"
        />
      )}
      {icon && variant === 'primary' && (
        <span className="relative z-10 ml-2 flex h-8 w-8 items-center justify-center">
          <ArrowRight className="h-4 w-4 text-himalayan transition-transform duration-500 group-hover:translate-x-0.5" />
        </span>
      )}
      <span
        className={cn(
          'relative z-10 px-4 py-2 whitespace-nowrap',
          variant === 'primary' && 'pl-2',
        )}
      >
        {children}
      </span>
    </>
  )

  if (href && isInternalPath(href)) {
    return (
      <Link ref={ref} to={href} className={classes} onClick={onClick} {...props}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a ref={ref} href={href} className={classes} onClick={onClick} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button ref={ref} type={type} className={classes} onClick={onClick} {...props}>
      {content}
    </button>
  )
})
