import { Briefcase, HeartHandshake, Sparkles } from 'lucide-react'
import { careerBenefits, careers } from '../data/content'
import { Button } from '../components/Button/Button'
import { Container } from '../components/ui/primitives'
import { PageCTA, PageHero, SectionHeader, usePageTitle } from '../components/Page/PageChrome'

export default function CareersPage() {
  usePageTitle('Careers')

  return (
    <main id="main">
      <PageHero
        eyebrow="Careers"
        title="Build meaningful technology from Nepal."
        description="Join a team that partners with businesses to design, ship and grow practical digital products."
        primaryCta={{ label: 'Send your profile', to: '/contact' }}
        secondaryCta={{ label: 'About TechMitra', to: '/about' }}
        visual={
          <div className="relative z-10 flex flex-col items-center gap-3">
            <Briefcase className="h-20 w-20 text-cyan" strokeWidth={1.25} />
            <p className="text-xs tracking-[0.18em] text-body">GROW WITH US</p>
          </div>
        }
      />

      <section className="band-light py-20 md:py-28">
        <Container>
          <SectionHeader
            light
            eyebrow="Open roles"
            title="Current opportunities."
            description="We only list real openings. If nothing fits right now, we’d still like to hear from strong people."
          />

          {careers.length === 0 ? (
            <div className="card-light flex flex-col items-start gap-4 p-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-display text-xl text-deep-navy">No open roles at the moment</p>
                <p className="mt-2 max-w-xl text-sm text-slate-600">
                  We’re always interested in thoughtful engineers, designers and operators. Share
                  your background and what you want to build next.
                </p>
              </div>
              <Button href="/contact" variant="accent" icon>
                Introduce yourself
              </Button>
            </div>
          ) : (
            <ul className="space-y-4">
              {careers.map((role) => (
                <li
                  key={role.id}
                  className="card-light flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between"
                >
                  <div>
                    <p className="font-display text-xl text-deep-navy">{role.title}</p>
                    <p className="mt-1 text-sm text-slate-600">
                      {role.location} · {role.type}
                    </p>
                  </div>
                  <Button href="/contact" variant="accent">
                    Apply now
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>

      <section className="band-dark py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Benefits"
            title="What you can expect."
            description="Culture and craft matter as much as the stack."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {careerBenefits.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-white/10 bg-deep-navy/50 p-6"
              >
                <span className="icon-tile">
                  {item.id === 'craft' ? (
                    <Sparkles className="h-5 w-5" />
                  ) : (
                    <HeartHandshake className="h-5 w-5" />
                  )}
                </span>
                <h3 className="mt-4 font-display text-lg">{item.title}</h3>
                <p className="mt-3 text-sm text-body">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <PageCTA
        title="Want to build with TechMitra?"
        description="Send a short note about your craft and interests — we’ll follow up when there’s a fit."
      />
    </main>
  )
}
