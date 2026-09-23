import { Link } from 'react-router-dom'
import { brand, navLinks, socialLinks } from '../../data/content'
import { Container } from '../ui/primitives'

export function Footer() {
  return (
    <footer className="relative z-[var(--z-content)] border-t border-white/8 bg-midnight pb-10 pt-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="font-display text-xl font-semibold">
              <span className="text-himalayan">Tech</span>
              <span className="text-cyan">Mitra</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-body">{brand.tagline}</p>
            <p className="mt-4 text-sm text-body">{brand.location}</p>
          </div>

          <div>
            <p className="label-micro mb-4">Navigate</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-body hover:text-himalayan">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-micro mb-4">Connect</p>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-body hover:text-himalayan"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-4 text-xs text-body">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>

        <p className="mt-12 border-t border-white/8 pt-6 text-xs text-body">
          © 2026 TechMitra. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
