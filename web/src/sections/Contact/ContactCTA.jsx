import { useState } from 'react'
import { Button } from '../../components/Button/Button'
import { Container } from '../../components/ui/primitives'
import { brand } from '../../data/content'

export function ContactCTA() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
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
    // Frontend-only contact flow — integrate API later without exposing secrets.
    setStatus('sent')
  }

  return (
    <section id="contact" className="section-veil relative z-[var(--z-content)] py-32">
      <Container>
        <div className="content-scrim content-scrim--wide">
          <p className="label-micro text-gold">Have an Idea?</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl text-shadow-readable md:text-6xl lg:text-7xl">
            Let&apos;s Build It.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-body">
            Tell us what you&apos;re building. We&apos;ll help turn the idea into a digital product.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" variant="accent" icon>
              Start a Project
            </Button>
            <Button href={`mailto:${brand.email}`} variant="secondary">
              Contact TechMitra
            </Button>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-14 grid max-w-2xl gap-4 rounded-2xl border border-white/10 bg-midnight/90 p-6 backdrop-blur-md md:p-8"
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
                className="w-full rounded-lg border border-white/10 bg-midnight px-3 py-2.5 text-himalayan outline-none focus:border-cyan/50"
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
                className="w-full rounded-lg border border-white/10 bg-midnight px-3 py-2.5 text-himalayan outline-none focus:border-cyan/50"
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
              className="w-full rounded-lg border border-white/10 bg-midnight px-3 py-2.5 text-himalayan outline-none focus:border-cyan/50"
            />
          </label>
          <label className="block text-sm">
            <span className="mb-2 block text-body">Project details</span>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              rows={5}
              className="w-full resize-y rounded-lg border border-white/10 bg-midnight px-3 py-2.5 text-himalayan outline-none focus:border-cyan/50"
              required
            />
          </label>
          <div className="flex items-center gap-4">
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
      </Container>
    </section>
  )
}
