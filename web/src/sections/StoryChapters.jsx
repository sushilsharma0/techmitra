import { Container, SectionHeading } from '../components/ui/primitives'

export function DigitalNepal() {
  return (
    <section
      id="nepal"
      className="section-veil relative z-[var(--z-content)] flex min-h-[90vh] items-center py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Digital Nepal"
          title={
            <>
              From the Himalayas
              <br />
              to the Digital Frontier.
            </>
          }
          description="Technology connects ideas, people and businesses across Nepal and beyond."
        />
      </Container>
    </section>
  )
}

export function DigitalTransformation() {
  return (
    <section className="section-veil relative z-[var(--z-content)] flex min-h-[80vh] items-center py-24">
      <Container>
        <SectionHeading
          eyebrow="Transform"
          title={
            <>
              Built in Nepal.
              <br />
              Connected to the World.
            </>
          }
          description="Mountains become particles. Cities become networks. Nature becomes infrastructure for ideas."
        />
      </Container>
    </section>
  )
}

export function TechMitraReveal() {
  return (
    <section className="section-veil relative z-[var(--z-content)] flex min-h-[85vh] items-center py-24">
      <Container>
        <div className="content-scrim content-scrim--wide content-scrim--center">
          <p className="label-micro mb-6 text-cyan">Reveal</p>
          <h2 className="font-display text-4xl text-shadow-readable md:text-6xl">
            Meet Your
            <span className="gradient-text"> Technology Partner.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-body">
            We design, build and scale digital solutions that help businesses move forward.
          </p>
        </div>
      </Container>
    </section>
  )
}
