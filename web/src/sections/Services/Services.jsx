import { useState } from 'react'
import { services } from '../../data/content'
import { Card, Container, SectionHeading } from '../../components/ui/primitives'
import { cn } from '../../utils/math'

export function Services({ onActiveChange }) {
  const [active, setActive] = useState(services[0].id)
  const current = services.find((s) => s.id === active) || services[0]

  const select = (id) => {
    setActive(id)
    onActiveChange?.(id)
  }

  return (
    <section id="services" className="section-solid relative z-[var(--z-content)] py-28">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="A technology ecosystem around your business."
          description="Hover a node or choose a capability. Every service is built to create measurable business value first."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <button
              key={service.id}
              type="button"
              onMouseEnter={() => select(service.id)}
              onFocus={() => select(service.id)}
              onClick={() => select(service.id)}
              className={cn(
                'cursor-pointer rounded-xl border px-4 py-5 text-left transition-all duration-300',
                active === service.id
                  ? 'border-cyan/40 bg-deep-blue/40 shadow-[var(--shadow-glow)]'
                  : 'border-white/8 bg-deep-navy/50 hover:border-white/20',
              )}
            >
              <p className="label-micro text-cyan">{service.label}</p>
              <p className="mt-2 font-display text-lg">{service.title}</p>
            </button>
          ))}
        </div>

        <Card className="mt-8 md:p-8">
          <p className="label-micro text-gold">{current.label}</p>
          <h3 className="mt-3 font-display text-2xl md:text-3xl">{current.title}</h3>
          <p className="mt-4 max-w-2xl text-body">{current.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {current.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-body"
              >
                {item}
              </span>
            ))}
          </div>
        </Card>
      </Container>
    </section>
  )
}
