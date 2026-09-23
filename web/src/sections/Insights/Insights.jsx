import { insights, testimonials } from '../../data/content'
import { Card, Container, SectionHeading } from '../../components/ui/primitives'

export function Insights() {
  return (
    <section id="insights" className="relative z-[var(--z-content)] bg-himalayan py-28 text-deep-navy">
      <Container>
        <SectionHeading
          light
          eyebrow="Insights"
          title="Ideas for builders and operators."
          description="Editorial notes on technology, AI, cloud and digital transformation in Nepal."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {insights.map((post) => (
            <article
              key={post.id}
              className="rounded-xl border border-deep-navy/10 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-0.5"
            >
              <p className="label-micro text-electric">{post.category}</p>
              <h3 className="mt-3 font-display text-xl text-deep-navy md:text-2xl">
                {post.title}
              </h3>
              <p className="mt-3 text-slate-600">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function Testimonials() {
  if (!testimonials.length) {
    return null
  }

  return (
    <section id="testimonials" className="relative z-[var(--z-content)] py-28">
      <Container>
        <SectionHeading eyebrow="Clients" title="Words from partners." />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((item) => (
            <Card key={item.name}>
              <blockquote className="text-lg text-himalayan">&ldquo;{item.quote}&rdquo;</blockquote>
              <p className="mt-6 font-display text-sm">{item.name}</p>
              <p className="text-xs text-muted">
                {item.position}, {item.company}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
