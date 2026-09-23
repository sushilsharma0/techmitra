import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../utils/math'

function isInternalPath(href) {
  return typeof href === 'string' && href.startsWith('/') && !href.startsWith('//')
}

/**
 * TechMitra buttons — solid pill CTAs inspired by the corporate system,
 * using brand electric/cyan/gold (gold only for accent conversion).
 */
export const Button = forwardRef(function Button(
  {
    children,
    variant = 'primary',
    href,
    className,
    icon = false,
    type = 'button',
    onClick,
    ...props
  },
  ref,
) {
  const classes = cn(
    'group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold tracking-tight transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-midnight',
    variant === 'primary' &&
      'bg-electric text-white hover:bg-[#3b8bff] shadow-[0_10px_30px_rgba(22,119,255,0.35)]',
    variant === 'accent' &&
      'bg-gold text-midnight hover:brightness-105 shadow-[0_10px_30px_rgba(245,185,66,0.35)]',
    variant === 'secondary' &&
      'border border-white/25 bg-transparent text-himalayan hover:border-white/50 hover:bg-white/5',
    variant === 'secondary-light' &&
      'border border-deep-navy/20 bg-white text-deep-navy hover:border-electric/40 hover:text-electric',
    variant === 'ghost' && 'bg-transparent text-body hover:text-himalayan',
    className,
  )

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
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
