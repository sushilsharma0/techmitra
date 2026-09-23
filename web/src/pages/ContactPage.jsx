import { useState } from 'react'
import { brand } from '../data/content'
import { Button } from '../components/Button/Button'
import { Card, Container } from '../components/ui/primitives'
import { Breadcrumb, PageHero, usePageTitle } from '../components/Page/PageChrome'

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
      />

      <section className="section-solid relative z-[var(--z-content)] py-20 md:py-28">
        <Container>
          <Breadcrumb items={[{ label: 'Contact' }]} />

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-5">
              <Card>
                <p className="label-micro text-cyan">Studio</p>
                <p className="mt-3 font-display text-xl">{brand.location}</p>
                <p className="mt-2 text-sm text-body">{brand.tagline}</p>
              </Card>
              <Card>
                <p className="label-micro text-gold">Email</p>
                <a
                  href={`mailto:${brand.email}`}
                  className="mt-3 block font-display text-xl text-himalayan hover:text-cyan"
                >
                  {brand.email}
                </a>
                <p className="mt-2 text-sm text-body">We typically respond within 1–2 business days.</p>
              </Card>
              <Card>
                <p className="label-micro text-cyan">What to include</p>
                <ul className="mt-4 space-y-2 text-sm text-body">
                  <li>· What you&apos;re building or improving</li>
                  <li>· Timeline and constraints</li>
                  <li>· Current tools or stack (if any)</li>
                </ul>
              </Card>
            </div>

            <form
              onSubmit={onSubmit}
              className="grid gap-4 rounded-2xl border border-white/10 bg-midnight/90 p-6 backdrop-blur-md md:p-8"
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
              <label className="block text-sm">
                <span className="mb-2 block text-body">Company</span>
                <input
                  name="company"
                  value={form.company}
                  onChange={onChange}
                  autoComplete="organization"
                  className={fieldClass}
                />
              </label>
              <label className="block text-sm">
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
                  <option value="other">Something else</option>
                </select>
              </label>
              <label className="block text-sm">
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
              <div className="flex flex-wrap items-center gap-4">
                <Button type="submit" icon={false}>
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
