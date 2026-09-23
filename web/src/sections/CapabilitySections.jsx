import { aiNodes, cloudLayers, cloudServices, securityItems } from '../data/content'
import { Card, Container, SectionHeading } from '../components/ui/primitives'

export function AI() {
  return (
    <section id="ai" className="section-solid relative z-[var(--z-content)] py-28">
      <Container>
        <SectionHeading
          eyebrow="AI & Automation"
          title="Make Your Business Smarter."
          description="Practical AI solutions designed to automate repetitive work and improve decision-making."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aiNodes.map((node) => (
            <Card key={node}>
              <p className="font-display text-lg">{node}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function Cloud() {
  return (
    <section id="cloud" className="section-solid relative z-[var(--z-content)] py-28">
      <Container>
        <SectionHeading
          eyebrow="Cloud & Infrastructure"
          title="Built to Scale."
          description="Reliable layers from user experience to backup — engineered for uptime and growth."
        />
        <div className="mt-12 flex flex-col gap-3 md:max-w-md">
          {cloudLayers.map((layer, i) => (
            <div key={layer} className="flex items-center gap-4">
              <span className="font-display text-xs text-body">{String(i + 1).padStart(2, '0')}</span>
              <div className="flex-1 rounded-lg border border-white/10 bg-deep-navy/60 px-4 py-3">
                {layer}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          {cloudServices.map((item) => (
            <span
              key={item}
              className="rounded-full border border-cyan/20 px-3 py-1.5 text-xs text-cyan"
            >
              {item}
            </span>
          ))}
        </div>
      </Container>
    </section>
  )
}

export function Security() {
  return (
    <section id="security" className="section-solid relative z-[var(--z-content)] py-28">
      <Container>
        <SectionHeading
          eyebrow="Cybersecurity"
          title="Security From the Ground Up."
          description="Protective practices across design, infrastructure and operations — without absolute claims."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {securityItems.map((item) => (
            <Card key={item}>
              <p className="font-display text-lg">{item}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
