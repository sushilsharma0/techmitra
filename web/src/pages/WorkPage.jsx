import { products, projects } from '../data/content'
import { Button } from '../components/Button/Button'
import { Card, Container } from '../components/ui/primitives'
import { Breadcrumb, PageCTA, PageHero, usePageTitle } from '../components/Page/PageChrome'

export default function WorkPage() {
  usePageTitle('Work')

  return (
    <main id="main">
      <PageHero
        eyebrow="Work"
        title="Selected journeys from idea to impact."
        description="Products and platforms shaped for real operations — restaurants, bakeries, commerce and custom business systems."
        secondaryCta={{ label: 'Start a Project', to: '/contact' }}
      />

      <section className="section-solid relative z-[var(--z-content)] py-20 md:py-28">
        <Container>
          <Breadcrumb items={[{ label: 'Work' }]} />
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="grid gap-6 overflow-hidden md:grid-cols-[0.35fr_1fr] md:gap-0 md:p-0"
              >
                <div className="flex min-h-[160px] flex-col justify-between bg-gradient-to-br from-deep-blue via-deep-navy to-midnight p-6 md:min-h-full md:p-8">
                  <p className="label-micro text-gold">0{index + 1}</p>
                  <p className="font-display text-2xl text-himalayan/90 md:text-3xl">{project.name}</p>
                </div>
                <div className="flex flex-col justify-center p-6 md:p-10">
                  <p className="label-micro text-cyan">{project.category}</p>
                  <h2 className="mt-3 font-display text-2xl md:text-4xl">{project.name}</h2>
                  <p className="mt-4 max-w-2xl text-body">{project.description}</p>
                  <p className="mt-5 text-sm text-cyan">{project.tech}</p>
                  <div className="mt-8">
                    <Button href="/contact" variant="secondary" icon={false}>
                      Discuss a Similar Build
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative z-[var(--z-content)] border-t border-white/8 py-20">
        <Container>
          <p className="label-micro text-cyan">Products</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">Platforms we continue to evolve.</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product.id}>
                <p className="label-micro text-gold">{product.category}</p>
                <h3 className="mt-3 font-display text-xl">{product.name}</h3>
                <p className="mt-3 text-sm text-body">{product.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-himalayan/80"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <PageCTA title="Have a project in mind?" />
    </main>
  )
}
