import { products } from '../../data/content'
import { Button } from '../../components/Button/Button'
import { Card, Container, SectionHeading } from '../../components/ui/primitives'

export function Products() {
  return (
    <section id="products" className="section-solid relative z-[var(--z-content)] py-28">
      <Container>
        <SectionHeading
          eyebrow="Products"
          title="Digital products shaped for real operations."
          description="Platforms built from on-the-ground business needs — not generic templates."
        />

        <div className="mt-14 space-y-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="grid gap-8 overflow-hidden md:grid-cols-[1.1fr_1fr] md:p-0"
            >
              <div
                className="min-h-[220px] bg-gradient-to-br from-deep-blue via-deep-navy to-midnight p-8 md:min-h-full"
                aria-hidden
              >
                <p className="label-micro text-gold">0{index + 1}</p>
                <p className="mt-8 font-display text-4xl text-himalayan/90">{product.name}</p>
              </div>
              <div className="flex flex-col justify-center p-6 md:p-8">
                <p className="label-micro text-cyan">{product.category}</p>
                <h3 className="mt-3 font-display text-2xl">{product.name}</h3>
                <p className="mt-3 text-body">{product.description}</p>
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
                <p className="mt-4 text-xs text-body">{product.tech.join(' · ')}</p>
                <div className="mt-6">
                  <Button href="/contact" variant="secondary" icon={false}>
                    View Project
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
