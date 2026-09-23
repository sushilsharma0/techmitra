import { brand, processSteps, values } from '../data/content'
import { Card, Container } from '../components/ui/primitives'
import { Breadcrumb, PageCTA, PageHero, usePageTitle } from '../components/Page/PageChrome'

export default function AboutPage() {
  usePageTitle('About')

  return (
    <main id="main">
      <PageHero
        eyebrow="About TechMitra"
        title={
          <>
            Born in Nepal.
            <br />
            Built for the World.
          </>
        }
        description="TechMitra is a technology partner focused on practical, scalable digital solutions for ambitious businesses."
        secondaryCta={{ label: 'Our Services', to: '/services' }}
      />

      <section className="section-solid relative z-[var(--z-content)] py-20 md:py-28">
        <Container>
          <Breadcrumb items={[{ label: 'About' }]} />

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="md:p-8">
              <p className="label-micro text-cyan">Mission</p>
              <p className="mt-4 text-lg text-himalayan">
                Be the technology partner that helps Nepali and global businesses move forward with
                clarity and craft.
              </p>
            </Card>
            <Card className="md:p-8">
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

          <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="label-micro text-cyan">Who we are</p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl">
                A technology friend for teams that want to grow.
              </h2>
              <p className="mt-5 text-body">
                &ldquo;Mitra&rdquo; means friend and trusted companion. We design, build and operate
                digital products with local understanding and modern engineering — from Kathmandu to
                wherever your customers are.
              </p>
              <p className="mt-4 text-body">
                Based in {brand.location}, we partner on websites, mobile apps, ERP, SaaS, cloud,
                AI and ongoing support.
              </p>
            </div>
            <Card>
              <p className="label-micro text-gold">How we work</p>
              <ol className="mt-5 space-y-4">
                {processSteps.map((step) => (
                  <li key={step.id} className="flex gap-4 border-b border-white/8 pb-4 last:border-0">
                    <span className="font-display text-sm text-cyan">{step.number}</span>
                    <span className="font-display text-lg">{step.title}</span>
                  </li>
                ))}
              </ol>
            </Card>
          </div>
        </Container>
      </section>

      <PageCTA title="Ready to partner with TechMitra?" />
    </main>
  )
}
