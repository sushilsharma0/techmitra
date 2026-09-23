import { values } from '../../data/content'
import { Card, Container, SectionHeading } from '../../components/ui/primitives'

export function About() {
  return (
    <section id="about" className="section-solid relative z-[var(--z-content)] py-28">
      <Container>
        <SectionHeading
          eyebrow="About TechMitra"
          title={
            <>
              Born in Nepal.
              <br />
              Built for the World.
            </>
          }
          description="TechMitra is a technology company focused on building practical, scalable and modern digital solutions for businesses."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card>
            <p className="label-micro text-cyan">Mission</p>
            <p className="mt-4 text-lg text-himalayan">
              Be the technology partner that helps Nepali and global businesses move forward with
              clarity and craft.
            </p>
          </Card>
          <Card>
            <p className="label-micro text-gold">Vision</p>
            <p className="mt-4 text-lg text-himalayan">
              Build the digital future from Nepal — with systems that scale beyond borders.
            </p>
          </Card>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <Card key={value.title}>
              <p className="font-display text-xl">{value.title}</p>
              <p className="mt-3 text-sm text-body">{value.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function Global() {
  return (
    <section
      id="global"
      className="section-veil relative z-[var(--z-content)] flex min-h-[70vh] items-center py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Reach"
          title={
            <>
              Local Understanding.
              <br />
              Global Technology.
            </>
          }
          description="Nepal is our starting point. Modern technology is our language. The horizon is open."
        />
      </Container>
    </section>
  )
}
