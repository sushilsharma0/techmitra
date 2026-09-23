import { industries, solutions } from '../../data/content'
import { Card, Container, SectionHeading } from '../../components/ui/primitives'

export function Solutions() {
  return (
    <section id="solutions" className="section-solid relative z-[var(--z-content)] py-28">
      <Container>
        <SectionHeading
          eyebrow="Solutions"
          title="Technology for Every Stage of Business."
          description="From first launch to enterprise infrastructure — systems matched to how your organization actually works."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {solutions.map((item) => (
            <Card key={item.id}>
              <p className="label-micro text-cyan">{item.title}</p>
              <p className="mt-4 text-lg text-himalayan">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12">
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
  )
}
