import { Compass, Eye, Handshake, Lightbulb, Users } from 'lucide-react'
import { brand, processSteps, values, whyChooseUs } from '../data/content'
import { Container } from '../components/ui/primitives'
import { PageCTA, PageHero, SectionHeader, usePageTitle } from '../components/Page/PageChrome'

const VALUE_ICONS = {
  Innovation: Lightbulb,
  Trust: Handshake,
  Growth: Compass,
  Partnership: Users,
}

export default function AboutPage() {
  usePageTitle('About')

  return (
    <main id="main">
      <PageHero
        eyebrow="About"
        title={
          <>
            Born in Nepal.
            <br />
            Built for the World.
          </>
        }
        description="TechMitra is a technology partner focused on practical, scalable digital solutions for ambitious businesses."
        secondaryCta={{ label: 'Our Services', to: '/services' }}
        visual={
          <div className="relative z-10 flex flex-col items-center gap-3 text-center">
            <Users className="h-20 w-20 text-cyan" strokeWidth={1.25} />
            <p className="font-display text-sm text-himalayan">Technology · Partnership · Nepal</p>
          </div>
        }
      />

      <section className="band-light py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <SectionHeader
                light
                eyebrow="Our story"
                title="A technology friend for teams that want to grow."
                description={`“Mitra” means friend and trusted companion. We design, build and operate digital products with local understanding and modern engineering — from ${brand.location} to wherever your customers are.`}
              />
              <p className="max-w-2xl text-slate-600">
                We partner on websites, mobile apps, ERP, SaaS, cloud, AI and ongoing support —
                always with clear communication and practical delivery.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="card-light p-6">
                <Eye className="h-6 w-6 text-electric" />
                <p className="mt-4 label-micro">Mission</p>
                <p className="mt-2 text-sm text-slate-700">
                  Help businesses move forward with clarity and craft.
                </p>
              </article>
              <article className="card-light p-6">
                <Compass className="h-6 w-6 text-electric" />
                <p className="mt-4 label-micro">Vision</p>
                <p className="mt-2 text-sm text-slate-700">
                  Build the digital future from Nepal with systems that scale.
                </p>
              </article>
            </div>
          </div>
        </Container>
      </section>

      <section className="band-dark py-20 md:py-28">
        <Container>
          <SectionHeader eyebrow="Values" title="What guides every engagement." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = VALUE_ICONS[value.title] || Lightbulb
              return (
                <article
                  key={value.title}
                  className="rounded-2xl border border-white/10 bg-deep-navy/50 p-6"
                >
                  <span className="icon-tile">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-xl">{value.title}</h3>
                  <p className="mt-3 text-sm text-body">{value.description}</p>
                </article>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="band-light py-20 md:py-28">
        <Container>
          <SectionHeader
            light
            eyebrow="How we work"
            title="From discovery to growth."
          />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {processSteps.map((step) => (
              <li key={step.id} className="card-light p-4 text-center">
                <p className="font-display text-sm text-electric">{step.number}</p>
                <p className="mt-2 font-display text-base text-deep-navy">{step.title}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item) => (
              <article key={item.title} className="card-light p-5">
                <h3 className="font-display text-lg text-deep-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <PageCTA title="Ready to partner with TechMitra?" />
    </main>
  )
}
