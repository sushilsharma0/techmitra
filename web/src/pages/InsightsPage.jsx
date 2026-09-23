import { Link } from 'react-router-dom'
import { BookOpen } from 'lucide-react'
import { insights } from '../data/content'
import { Button } from '../components/Button/Button'
import { Container } from '../components/ui/primitives'
import { PageCTA, PageHero, SectionHeader, usePageTitle } from '../components/Page/PageChrome'

const categories = [...new Set(insights.map((item) => item.category))]

export default function InsightsPage() {
  usePageTitle('Insights')

  return (
    <main id="main">
      <PageHero
        eyebrow="Insights"
        title="Ideas for builders and operators."
        description="Notes on technology, AI, cloud, cybersecurity and digital transformation in Nepal."
        secondaryCta={{ label: 'Talk to TechMitra', to: '/contact' }}
        visual={
          <div className="relative z-10 flex flex-col items-center gap-3">
            <BookOpen className="h-20 w-20 text-cyan" strokeWidth={1.25} />
            <p className="text-xs tracking-[0.18em] text-body">EDITORIAL</p>
          </div>
        }
      />

      <section className="band-light py-20 md:py-28">
        <Container>
          <SectionHeader
            light
            eyebrow="Topics"
            title="Latest from the TechMitra desk."
          />
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-deep-navy/10 bg-white px-3 py-1 text-xs font-semibold text-electric"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {insights.map((post) => (
              <article key={post.id} id={post.id} className="card-light flex flex-col overflow-hidden">
                <div className="flex h-36 items-end bg-gradient-to-br from-deep-blue via-deep-navy to-midnight p-5">
                  <span className="rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-midnight">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="mt-3 font-display text-xl text-deep-navy">
                    <Link to={`#${post.id}`} className="hover:text-electric">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm text-slate-600">{post.excerpt}</p>
                  {post.body && (
                    <p className="mt-4 border-t border-deep-navy/10 pt-4 text-sm leading-relaxed text-slate-700">
                      {post.body}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/contact" variant="accent" icon>
              Ask us a question
            </Button>
          </div>
        </Container>
      </section>

      <PageCTA title="Want advice on your next system?" />
    </main>
  )
}
