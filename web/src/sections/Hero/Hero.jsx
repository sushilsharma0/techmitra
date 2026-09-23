import { useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '../../components/Button/Button'
import { Container } from '../../components/ui/primitives'
import { playHeroIntro } from '../../animations/heroTimeline'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function Hero() {
  const reducedMotion = useReducedMotion()
  const logoRef = useRef(null)
  const lineRefs = useRef([])
  const ctaRef = useRef(null)
  const indicatorRef = useRef(null)

  useEffect(() => {
    return playHeroIntro({
      logo: logoRef.current,
      lines: lineRefs.current.filter(Boolean),
      ctas: ctaRef.current,
      indicator: indicatorRef.current,
      reducedMotion,
    })
  }, [reducedMotion])

  return (
    <section
      id="home"
      className="section-veil relative z-[var(--z-content)] flex min-h-screen items-end pb-24 pt-32 md:items-center md:pb-0"
    >
      <Container className="relative">
        <div className="content-scrim content-scrim--wide">
          <p ref={logoRef} className="label-micro mb-6 text-cyan opacity-0">
            TECHMITRA • NEPAL
          </p>
          <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-shadow-readable md:text-6xl lg:text-7xl">
            <span ref={(el) => (lineRefs.current[0] = el)} className="block opacity-0">
              Technology
            </span>
            <span ref={(el) => (lineRefs.current[1] = el)} className="block opacity-0">
              That Moves
            </span>
            <span
              ref={(el) => (lineRefs.current[2] = el)}
              className="block gradient-text opacity-0"
            >
              Nepal Forward.
            </span>
          </h1>
          <p
            ref={(el) => (lineRefs.current[3] = el)}
            className="mt-6 max-w-xl text-base text-body md:text-lg opacity-0"
          >
            Digital products, software and technology solutions built for ambitious businesses.
          </p>
            <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4 opacity-0">
              <Button href="/contact" variant="accent" icon>
                Start a Project
              </Button>
              <Button href="/work" variant="secondary">
                Explore Our Work
              </Button>
            </div>
        </div>
      </Container>

      <div
        ref={indicatorRef}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 rounded-full border border-white/10 bg-midnight/80 px-4 py-2 opacity-0 backdrop-blur-md"
      >
        <span className="label-micro text-cyan">Scroll to explore</span>
        <ChevronDown data-arrow className="h-4 w-4 text-cyan" aria-hidden />
      </div>
    </section>
  )
}
