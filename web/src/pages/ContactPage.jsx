import { useState } from 'react'
import { Mail, MapPin, MessageSquare } from 'lucide-react'
import { brand } from '../data/content'
import { Button } from '../components/Button/Button'
import { Container } from '../components/ui/primitives'
import { PageHero, SectionHeader, usePageTitle } from '../components/Page/PageChrome'

export default function ContactPage() {
  usePageTitle('Contact')
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error')
      return
    }
    setStatus('sent')
  }

  const fieldClass =
    'w-full rounded-lg border border-white/10 bg-midnight px-3 py-2.5 text-himalayan outline-none focus:border-cyan/50'

  return (
    <main id="main">
      <PageHero
        eyebrow="Contact"
        title="Have an idea? Let's build it."
        description="Share what you're building. We'll help turn the idea into a digital product — with clear next steps."
        primaryCta={{ label: 'Email TechMitra', to: `mailto:${brand.email}` }}
        secondaryCta={{ label: 'View Services', to: '/services' }}
        visual={
          <div className="relative z-10 flex flex-col items-center gap-3">
            <div className="rounded-2xl border border-cyan/30 bg-deep-navy/70 px-10 py-8">
              <MapPin className="mx-auto h-14 w-14 text-gold" strokeWidth={1.25} />
              <p className="mt-4 text-center font-display text-sm text-himalayan">Nepal</p>
              <p className="mt-1 text-center text-xs text-body">{brand.location}</p>
            </div>
          </div>
        }
      />

      <section className="band-light py-20 md:py-28">
        <Container>
          <SectionHeader
            light
            eyebrow="Get in touch"
            title="Tell us about your project."
          />
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <article className="card-light p-6">
                <Mail className="h-5 w-5 text-electric" />
                <p className="mt-4 label-micro">Email</p>
                <a
                  href={`mailto:${brand.email}`}
                  className="mt-2 block font-display text-lg text-deep-navy hover:text-electric"
                >
                  {brand.email}
                </a>
                <p className="mt-2 text-sm text-slate-600">Typically 1–2 business days.</p>
              </article>
              <article className="card-light p-6">
                <MapPin className="h-5 w-5 text-electric" />
                <p className="mt-4 label-micro">Studio</p>
                <p className="mt-2 font-display text-lg text-deep-navy">{brand.location}</p>
                <p className="mt-2 text-sm text-slate-600">{brand.tagline}</p>
              </article>
              <article className="card-light p-6">
                <MessageSquare className="h-5 w-5 text-electric" />
                <p className="mt-4 label-micro">What to include</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>· What you&apos;re building or improving</li>
                  <li>· Timeline and constraints</li>
                  <li>· Current tools or stack (if any)</li>
                </ul>
              </article>
            </div>

            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-deep-navy/10 bg-deep-navy p-6 shadow-lg md:p-8"
              noValidate
            >
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-2 block text-body">Name</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    autoComplete="name"
                    className={fieldClass}
                    required
                  />
                </label>
                <label className="block text-sm">
                  <span className="mb-2 block text-body">Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    autoComplete="email"
                    className={fieldClass}
                    required
                  />
                </label>
              </div>
              <label className="mt-4 block text-sm">
                <span className="mb-2 block text-body">Company</span>
                <input
                  name="company"
                  value={form.company}
                  onChange={onChange}
                  autoComplete="organization"
                  className={fieldClass}
                />
              </label>
              <label className="mt-4 block text-sm">
                <span className="mb-2 block text-body">Interest</span>
                <select
                  name="service"
                  value={form.service}
                  onChange={onChange}
                  className={fieldClass}
                >
                  <option value="">Select a focus</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile Apps</option>
                  <option value="erp">ERP / Business Systems</option>
                  <option value="saas">SaaS Product</option>
                  <option value="cloud">Cloud & Infrastructure</option>
                  <option value="ai">AI & Automation</option>
                  <option value="careers">Careers / Joining the team</option>
                  <option value="other">Something else</option>
                </select>
              </label>
              <label className="mt-4 block text-sm">
                <span className="mb-2 block text-body">Project details</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={6}
                  className={`${fieldClass} resize-y`}
                  required
                />
              </label>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Button type="submit" variant="accent" icon>
                  Send Message
                </Button>
                {status === 'sent' && (
                  <p className="text-sm text-cyan" role="status">
                    Thanks — we&apos;ll respond soon.
                  </p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-gold" role="alert">
                    Please complete name, email and message.
                  </p>
                )}
              </div>
            </form>
          </div>
        </Container>
      </section>
    </main>
  )
}
