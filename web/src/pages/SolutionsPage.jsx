import { Building2, GraduationCap, Rocket, Store } from 'lucide-react'
import { industries, products, solutions, whyChooseUs } from '../data/content'
import { Button } from '../components/Button/Button'
import { Container } from '../components/ui/primitives'
import { PageCTA, PageHero, SectionHeader, usePageTitle } from '../components/Page/PageChrome'

const STAGE_ICONS = {
  startups: Rocket,
  smes: Store,
  enterprises: Building2,
  institutions: GraduationCap,
}

export default function SolutionsPage() {
  usePageTitle('Solutions')

  return (
    <main id="main">
      <PageHero
        eyebrow="Solutions"
        title="Technology for every stage of business."
        description="From first launch to enterprise infrastructure — systems matched to how your organization actually works."
        secondaryCta={{ label: 'See Our Work', to: '/work' }}
        visual={
          <div className="relative z-10 grid w-full max-w-xs grid-cols-2 gap-3">
            {solutions.map((item) => {
              const Icon = STAGE_ICONS[item.id] || Building2
              return (
                <div
                  key={item.id}
                  className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-midnight/50 p-4"
                >
                  <Icon className="h-6 w-6 text-cyan" />
                  <span className="text-center text-xs text-body">{item.title}</span>
                </div>
              )
            })}
          </div>
        }
      />

      <section className="band-light py-20 md:py-28">
        <Container>
          <SectionHeader
            light
            eyebrow="By stage"
            title="Choose the path that matches your growth."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {solutions.map((item, index) => {
              const Icon = STAGE_ICONS[item.id] || Building2
              return (
                <article key={item.id} className="card-light p-6 md:p-8">
                  <div className="flex items-center justify-between">
                    <span className="icon-tile">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="font-display text-sm text-electric">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-deep-navy">{item.title}</h3>
                  <p className="mt-2 font-medium text-electric">{item.description}</p>
                  <p className="mt-3 text-slate-600">{item.detail}</p>
                  {item.focus && (
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {item.focus.map((focus) => (
                        <li
                          key={focus}
                          className="rounded-full border border-deep-navy/10 bg-himalayan px-3 py-1 text-xs text-deep-navy"
                        >
                          {focus}
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

      <section className="band-dark py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Why TechMitra"
            title="A partner for practical digital progress."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-deep-navy/50 p-6">
                <h3 className="font-display text-lg text-himalayan">{item.title}</h3>
                <p className="mt-3 text-sm text-body">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-14">
            <p className="label-micro mb-4">Industries</p>
            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-body"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="band-light py-20 md:py-28">
        <Container>
          <SectionHeader
            light
            eyebrow="Products"
            title="Platforms shaped for real operations."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {products.map((product) => (
              <article key={product.id} className="card-light flex flex-col p-6">
                <p className="label-micro">{product.category}</p>
                <h3 className="mt-3 font-display text-xl text-deep-navy">{product.name}</h3>
                <p className="mt-3 flex-1 text-sm text-slate-600">{product.description}</p>
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
                <div className="mt-6">
                  <Button href="/contact" variant="secondary-light">
                    Talk about this product
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <PageCTA title="Tell us where your business is headed." />
    </main>
  )
}
