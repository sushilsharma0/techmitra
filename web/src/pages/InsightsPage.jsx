import { Link } from 'react-router-dom'
import { insights } from '../data/content'
import { Container } from '../components/ui/primitives'
import { Breadcrumb, PageCTA, PageHero, usePageTitle } from '../components/Page/PageChrome'

const categories = [...new Set(insights.map((item) => item.category))]

export default function InsightsPage() {
  usePageTitle('Insights')

  return (
    <main id="main">
      <PageHero
        eyebrow="Insights"
        title="Ideas for builders and operators."
        description="Editorial notes on technology, AI, cloud, cybersecurity and digital transformation in Nepal."
        secondaryCta={{ label: 'Talk to TechMitra', to: '/contact' }}
      />

      <section className="section-solid relative z-[var(--z-content)] pb-6 pt-28">
        <Container>
          <Breadcrumb items={[{ label: 'Insights' }]} />
        </Container>
      </section>

      <section className="bg-himalayan py-16 text-deep-navy md:py-24">
        <Container>
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-deep-navy/15 px-3 py-1 text-xs font-medium text-deep-blue"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {insights.map((post) => (
              <article
                key={post.id}
                id={post.id}
                className="rounded-xl border border-deep-navy/10 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-0.5 md:p-8"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="label-micro text-electric">{post.category}</p>
                  {post.readTime && (
                    <span className="text-xs text-slate-500">{post.readTime}</span>
                  )}
                </div>
                <h2 className="mt-3 font-display text-xl text-deep-navy md:text-2xl">
                  <Link to={`#${post.id}`} className="hover:text-electric">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-slate-600">{post.excerpt}</p>
                {post.body && (
                  <p className="mt-5 border-t border-deep-navy/10 pt-5 text-sm leading-relaxed text-slate-700">
                    {post.body}
                  </p>
                )}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <PageCTA title="Want advice on your next system?" />
    </main>
  )
}
