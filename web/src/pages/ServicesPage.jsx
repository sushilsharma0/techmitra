import {
  Cloud,
  Code2,
  Shield,
  Smartphone,
  Boxes,
  Bot,
  Megaphone,
  Server,
} from 'lucide-react'
import { processSteps, services } from '../data/content'
import { Button } from '../components/Button/Button'
import { Container } from '../components/ui/primitives'
import { PageCTA, PageHero, SectionHeader, usePageTitle } from '../components/Page/PageChrome'

const ICONS = {
  web: Code2,
  mobile: Smartphone,
  erp: Boxes,
  saas: Boxes,
  cloud: Cloud,
  ai: Bot,
  security: Shield,
  digital: Megaphone,
}

export default function ServicesPage() {
  usePageTitle('Services')

  return (
    <main id="main">
      <PageHero
        eyebrow="Services"
        title="Technology capabilities built for real business outcomes."
        description="Web, mobile, ERP, SaaS, cloud, AI, security and digital growth — delivered as your technology partner."
        secondaryCta={{ label: 'View Solutions', to: '/solutions' }}
        visual={
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="flex h-28 w-40 items-end justify-center rounded-xl border border-cyan/30 bg-deep-navy/80 p-3">
              <Server className="h-16 w-16 text-cyan" />
            </div>
            <div className="flex gap-3">
              <Cloud className="h-8 w-8 text-electric" />
              <Shield className="h-8 w-8 text-gold" />
              <Code2 className="h-8 w-8 text-cyan" />
            </div>
          </div>
        }
      />

      <section className="band-light py-20 md:py-28">
        <Container>
          <SectionHeader
            light
            eyebrow="What we build"
            title="A full stack of practical services."
            description="Every capability is framed around business value first — then technology."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = ICONS[service.id] || Code2
              return (
                <article key={service.id} className="card-light p-6 transition-transform duration-300 hover:-translate-y-1">
                  <span className="icon-tile">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-lg text-deep-navy">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.description}</p>
                </article>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="band-dark py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Depth"
            title="How each capability creates value."
            description="Explore the detail behind every service — outcomes, approach and stack."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => {
              const Icon = ICONS[service.id] || Code2
              return (
                <article
                  key={service.id}
                  className="rounded-2xl border border-white/10 bg-deep-navy/60 p-6 md:p-8"
                >
                  <div className="flex items-center gap-3">
                    <span className="icon-tile">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="label-micro">{service.label}</p>
                      <h3 className="font-display text-xl">{service.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-body">{service.detail || service.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.stack.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-body"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  {service.outcomes && (
                    <ul className="mt-5 space-y-2 border-t border-white/8 pt-5">
                      {service.outcomes.map((item) => (
                        <li key={item} className="text-sm text-himalayan/90">
                          · {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="band-light py-20 md:py-28">
        <Container>
          <SectionHeader
            light
            align="center"
            eyebrow="Process"
            title="From idea to impact."
            description="A clear path from discovery to growth after launch."
          />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {processSteps.map((step) => (
              <li key={step.id} className="card-light p-4 text-center">
                <p className="font-display text-sm text-electric">{step.number}</p>
                <p className="mt-2 font-display text-base text-deep-navy">{step.title}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex justify-center">
            <Button href="/contact" variant="accent" icon>
              Discuss your project
            </Button>
          </div>
        </Container>
      </section>

      <PageCTA title="Need a capability mapped to your roadmap?" />
    </main>
  )
}
