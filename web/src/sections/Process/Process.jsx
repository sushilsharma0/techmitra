import { useEffect, useRef } from 'react'
import { processSteps } from '../../data/content'
import { Container, SectionHeading } from '../../components/ui/primitives'
import { createProcessTimeline } from '../../animations/scrollStory'

export function Process() {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)
  const stepRefs = useRef([])

  useEffect(() => {
    return createProcessTimeline(
      sectionRef.current,
      lineRef.current,
      stepRefs.current.filter(Boolean),
    )
  }, [])

  return (
    <section
      id="process"
      ref={sectionRef}
      className="section-solid relative z-[var(--z-content)] py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="From Idea to Impact."
          description="A clear path from discovery to deployment — and growth after launch."
        />

        <div className="relative mt-16">
          <div className="absolute left-0 top-6 h-px w-full origin-left bg-white/10">
            <div
              ref={lineRef}
              className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-electric to-cyan"
            />
          </div>
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {processSteps.map((step, i) => (
              <li
                key={step.id}
                ref={(el) => {
                  stepRefs.current[i] = el
                }}
                className="translate-y-4 opacity-40"
              >
                <p className="font-display text-sm text-cyan">{step.number}</p>
                <p className="mt-3 font-display text-lg">{step.title}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
