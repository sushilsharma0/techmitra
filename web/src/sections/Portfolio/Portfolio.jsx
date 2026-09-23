import { useEffect, useRef } from 'react'
import { projects } from '../../data/content'
import { Button } from '../../components/Button/Button'
import { Container } from '../../components/ui/primitives'
import { createPortfolioScroll } from '../../animations/scrollStory'
import { useIsMobile } from '../../hooks/useMediaQuery'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function Portfolio() {
  const sectionRef = useRef(null)
  const viewportRef = useRef(null)
  const trackRef = useRef(null)
  const isMobile = useIsMobile()
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    if (isMobile || reducedMotion) return undefined
    return createPortfolioScroll(sectionRef.current, trackRef.current, viewportRef.current)
  }, [isMobile, reducedMotion])

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative z-[var(--z-content)] overflow-x-clip bg-midnight/95 py-24 md:min-h-screen md:py-28"
    >
      <Container className="mb-10 md:mb-12">
        <p className="label-micro text-cyan">Work</p>
        <h2 className="mt-3 font-display text-3xl md:text-5xl">Selected journeys.</h2>
      </Container>

      <Container>
        <div ref={viewportRef} className="w-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex w-full flex-col gap-6 md:w-max md:flex-row md:items-stretch md:gap-8"
          >
            {projects.map((project) => (
              <article
                key={project.id}
                className="box-border w-full shrink-0 rounded-2xl border border-white/10 bg-deep-navy/80 p-6 sm:p-8 md:w-[32rem] md:p-10 lg:w-[36rem]"
              >
                <p className="label-micro text-gold">{project.category}</p>
                <h3 className="mt-4 break-words font-display text-3xl md:text-4xl lg:text-5xl">
                  {project.name}
                </h3>
                <p className="mt-5 max-w-xl text-base text-body md:text-lg">{project.description}</p>
                <p className="mt-6 text-sm text-cyan">{project.tech}</p>
                <div className="mt-8">
                  <Button href="/contact" variant="secondary" icon={false}>
                    View Case Study
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
