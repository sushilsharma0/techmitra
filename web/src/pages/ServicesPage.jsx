import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { services } from '../data/content'
import { Card, Container } from '../components/ui/primitives'
import { Breadcrumb, PageCTA, PageHero, usePageTitle } from '../components/Page/PageChrome'
import { Process } from '../sections/Process/Process'

export default function ServicesPage() {
  usePageTitle('Services')

  return (
    <main id="main">
      <PageHero
        eyebrow="Services"
        title="Technology capabilities built around business outcomes."
        description="Web, mobile, ERP, SaaS, cloud, AI, security and digital growth — delivered as a partner, not a ticket queue."
        secondaryCta={{ label: 'View Solutions', to: '/solutions' }}
      />

      <section className="section-solid relative z-[var(--z-content)] py-20 md:py-28">
        <Container>
          <Breadcrumb items={[{ label: 'Services' }]} />
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <Card key={service.id} className="group md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <p className="label-micro text-cyan">{service.label}</p>
                  <ArrowUpRight className="h-4 w-4 text-muted transition-colors group-hover:text-cyan" />
                </div>
                <h2 className="mt-4 font-display text-2xl md:text-3xl">{service.title}</h2>
                <p className="mt-3 text-body">{service.detail || service.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
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
                  <ul className="mt-6 space-y-2 border-t border-white/8 pt-5">
                    {service.outcomes.map((item) => (
                      <li key={item} className="text-sm text-himalayan/90">
                        · {item}
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            ))}
          </div>

          <p className="mt-10 text-sm text-body">
            Looking for industry-specific systems?{' '}
            <Link to="/solutions" className="text-cyan hover:underline">
              Explore solutions by business stage
            </Link>
            .
          </p>
        </Container>
      </section>

      <Process />
      <PageCTA title="Need a capability mapped to your roadmap?" />
    </main>
  )
}
