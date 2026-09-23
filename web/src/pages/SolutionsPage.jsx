import { industries, solutions } from '../data/content'
import { Card, Container } from '../components/ui/primitives'
import { Breadcrumb, PageCTA, PageHero, usePageTitle } from '../components/Page/PageChrome'
import { Products } from '../sections/Products/Products'

export default function SolutionsPage() {
  usePageTitle('Solutions')

  return (
    <main id="main">
      <PageHero
        eyebrow="Solutions"
        title="Technology for every stage of business."
        description="From first launch to enterprise infrastructure — systems matched to how your organization actually works."
        secondaryCta={{ label: 'See Our Work', to: '/work' }}
      />

      <section className="section-solid relative z-[var(--z-content)] py-20 md:py-28">
        <Container>
          <Breadcrumb items={[{ label: 'Solutions' }]} />
          <div className="grid gap-5 md:grid-cols-2">
            {solutions.map((item, index) => (
              <Card key={item.id} className="md:p-8">
                <p className="label-micro text-gold">0{index + 1}</p>
                <h2 className="mt-4 font-display text-2xl md:text-3xl">{item.title}</h2>
                <p className="mt-2 text-lg text-cyan">{item.description}</p>
                <p className="mt-4 text-body">{item.detail}</p>
                {item.focus && (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {item.focus.map((focus) => (
                      <li
                        key={focus}
                        className="rounded-full border border-cyan/20 px-3 py-1 text-xs text-cyan"
                      >
                        {focus}
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-16">
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

      <Products />
      <PageCTA title="Tell us where your business is headed." />
    </main>
  )
}
