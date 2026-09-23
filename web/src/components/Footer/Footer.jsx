import { Link } from 'react-router-dom'
import { brand, navLinks, socialLinks } from '../../data/content'
import { Container } from '../ui/primitives'

export function Footer() {
  return (
    <footer className="relative z-[var(--z-content)] border-t border-white/8 bg-midnight pb-10 pt-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link to="/" className="font-display text-xl font-semibold">
              <span className="text-himalayan">Tech</span>
              <span className="text-cyan">Mitra</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-body">{brand.tagline}</p>
            <p className="mt-4 text-sm text-body">{brand.location}</p>
            <a
              href={`mailto:${brand.email}`}
              className="mt-2 block text-sm text-cyan hover:underline"
            >
              {brand.email}
            </a>
          </div>

          <div>
            <p className="label-micro mb-4">Quick links</p>
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
            <p className="label-micro mb-4">Company</p>
            <ul className="space-y-2 text-sm text-body">
              <li>
                <Link to="/about" className="hover:text-himalayan">
                  About TechMitra
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-himalayan">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-himalayan">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-himalayan">
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="label-micro mb-4">Social</p>
            <ul className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-xs text-body transition-colors hover:border-cyan/40 hover:text-cyan"
                    aria-label={link.label}
                  >
                    {link.label.slice(0, 2)}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex gap-4 text-xs text-body">
              <a href="/privacy" className="hover:text-himalayan">
                Privacy
              </a>
              <a href="/terms" className="hover:text-himalayan">
                Terms
              </a>
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
