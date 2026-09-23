import { useEffect, useRef, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { animate } from 'animejs'
import { brand, navLinks } from '../../data/content'
import { Button } from '../Button/Button'
import { cn } from '../../utils/math'

/**
 * Pattern adapted from 21st.dev Navbar 1 — rebuilt for TechMitra.
 * Uses `.site-shell` — same gutters as every page section.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)
  const linksRef = useRef([])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open || !panelRef.current) return
    animate(panelRef.current, {
      opacity: [0, 1],
      duration: 320,
      ease: 'outQuad',
    })
    animate(linksRef.current.filter(Boolean), {
      opacity: [0, 1],
      translateY: [24, 0],
      delay: (_el, i) => 80 + i * 55,
      duration: 420,
      ease: 'outCubic',
    })
  }, [open])

  const linkClass = ({ isActive }) =>
    cn(
      'text-sm transition-colors duration-200',
      isActive ? 'text-himalayan' : 'text-body hover:text-himalayan',
    )

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="fixed inset-x-0 top-0 z-[var(--z-nav)]">
        <div className={cn('site-shell', 'pt-4')}>
          <div
            className={cn(
              'flex h-14 w-full items-center justify-between rounded-2xl border px-4 transition-all duration-300 md:h-16 md:px-5',
              scrolled
                ? 'border-white/10 bg-midnight/80 shadow-[var(--shadow-nav)] backdrop-blur-xl'
                : 'border-transparent bg-transparent',
            )}
          >
            <Link to="/" className="font-display text-lg font-semibold tracking-tight">
              <span className="text-himalayan">Tech</span>
              <span className="text-cyan">Mitra</span>
            </Link>

            <nav className="hidden items-center gap-6 xl:gap-7 lg:flex" aria-label="Primary">
              {navLinks.map((link) => (
                <NavLink key={link.href} to={link.href} end={link.href === '/'} className={linkClass}>
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:block">
              <Button href="/contact" className="h-11 text-xs">
                Start a Project
              </Button>
            </div>

            <button
              type="button"
              className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-himalayan lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          id="mobile-nav"
          ref={panelRef}
          className="fixed inset-0 z-[var(--z-overlay)] flex flex-col bg-midnight/98 pb-10 pt-24 backdrop-blur-xl lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className={cn('site-shell', 'flex flex-1 flex-col')}>
            <button
              type="button"
              className="absolute right-6 top-5 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 sm:right-8 lg:right-12"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>

            <nav className="flex flex-1 flex-col gap-5" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <NavLink
                  key={link.href}
                  ref={(el) => {
                    linksRef.current[i] = el
                  }}
                  to={link.href}
                  end={link.href === '/'}
                  className="font-display text-3xl text-himalayan opacity-0"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="space-y-6">
              <Button href="/contact" onClick={() => setOpen(false)}>
                Start a Project
              </Button>
              <p className="max-w-xs text-sm text-body">{brand.tagline}</p>
              <div className="flex gap-4 text-sm text-cyan">
                <a href="https://linkedin.com/company/techmitra">LinkedIn</a>
                <a href="https://github.com/techmitra">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
