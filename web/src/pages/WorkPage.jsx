import { MonitorSmartphone } from 'lucide-react'
import { products, projects } from '../data/content'
import { Button } from '../components/Button/Button'
import { Container } from '../components/ui/primitives'
import { PageCTA, PageHero, SectionHeader, usePageTitle } from '../components/Page/PageChrome'
import { cn } from '../utils/math'

export default function WorkPage() {
  usePageTitle('Work')

  return (
    <main id="main">
      <PageHero
        eyebrow="Work"
        title="Selected journeys from idea to impact."
        description="Products and platforms shaped for real operations — restaurants, bakeries, commerce and custom business systems."
        secondaryCta={{ label: 'Start a Project', to: '/contact' }}
        visual={
          <div className="relative z-10 flex items-center justify-center">
            <MonitorSmartphone className="h-28 w-28 text-cyan" strokeWidth={1.25} />
          </div>
        }
      />

      <section className="band-light py-16 md:py-20">
        <Container>
          <p className="label-micro text-center">Featured platforms</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:gap-6">
            {products.map((product) => (
              <span
                key={product.id}
                className="rounded-full border border-deep-navy/10 bg-white px-5 py-2 font-display text-sm text-deep-navy shadow-sm"
              >
                {product.name}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="band-dark py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Case studies"
            title="Projects built for operators."
            description="Each engagement focuses on clarity, reliability and measurable operational improvement."
          />
          <div className="space-y-8">
            {projects.map((project, index) => {
              const reverse = index % 2 === 1
              return (
                <article
                  key={project.id}
                  className={cn(
                    'grid overflow-hidden rounded-2xl border border-white/10 bg-deep-navy/40 md:grid-cols-2',
                    reverse && 'md:[&>*:first-child]:order-2',
                  )}
                >
                  <div className="flex min-h-[220px] flex-col justify-between bg-gradient-to-br from-deep-blue via-deep-navy to-midnight p-8 md:min-h-[280px]">
                    <p className="label-micro text-gold">0{index + 1}</p>
                    <div>
                      <p className="font-display text-3xl text-himalayan md:text-4xl">{project.name}</p>
                      <p className="mt-2 text-sm text-cyan">{project.category}</p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-8 md:p-10">
                    <h2 className="font-display text-2xl md:text-3xl">{project.name}</h2>
                    <p className="mt-4 text-body">{project.description}</p>
                    <p className="mt-5 text-sm text-cyan">{project.tech}</p>
                    <div className="mt-8">
                      <Button href="/contact" variant="accent">
                        Discuss a similar build
                      </Button>
                    </div>
                  </div>
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
            eyebrow="Products"
            title="Platforms we continue to evolve."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {products.map((product) => (
              <article key={product.id} className="card-light p-6">
                <p className="label-micro">{product.category}</p>
                <h3 className="mt-3 font-display text-xl text-deep-navy">{product.name}</h3>
                <p className="mt-3 text-sm text-slate-600">{product.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-md border border-deep-navy/10 px-2.5 py-1 text-xs text-deep-navy/80"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <PageCTA title="Have a project in mind?" />
    </main>
  )
}
