import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { Loader } from '../components/Loader/Loader'
import { Hero } from '../sections/Hero/Hero'
import {
  DigitalNepal,
  DigitalTransformation,
  TechMitraReveal,
} from '../sections/StoryChapters'
import { Services } from '../sections/Services/Services'
import { Solutions } from '../sections/Solutions/Solutions'
import { Products } from '../sections/Products/Products'
import { Portfolio } from '../sections/Portfolio/Portfolio'
import { Process } from '../sections/Process/Process'
import { AI, Cloud, Security } from '../sections/CapabilitySections'
import { About, Global } from '../sections/About/About'
import { Insights, Testimonials } from '../sections/Insights/Insights'
import { ContactCTA } from '../sections/Contact/ContactCTA'
import { StoryProvider, useStory } from '../hooks/useStory'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { useWebGL } from '../hooks/useWebGL'
import { createStoryScroll } from '../animations/scrollStory'
import { usePageTitle } from '../components/Page/PageChrome'

const StoryCanvas = lazy(() =>
  import('../three/StoryCanvas').then((m) => ({ default: m.StoryCanvas })),
)

function HomeExperience() {
  const trackRef = useRef(null)
  const { progressRef, setPhase, setWebgl, loaded, setLoaded } = useStory()
  const reducedMotion = useReducedMotion()
  const webgl = useWebGL()
  const [activeService, setActiveService] = useState('web')
  const [loadProgress, setLoadProgress] = useState(0)
  const [bootDone, setBootDone] = useState(false)

  usePageTitle('')

  useEffect(() => {
    setWebgl(webgl)
  }, [webgl, setWebgl])

  useEffect(() => {
    let frame = 0
    const tick = () => {
      frame += 1
      setLoadProgress((p) => Math.min(webgl && !loaded ? 0.85 : 1, p + 0.04))
      if (frame < 40) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [webgl, loaded])

  useEffect(() => {
    if (!webgl) {
      setLoaded(true)
      setLoadProgress(1)
    }
  }, [webgl, setLoaded])

  useEffect(() => {
    let lastPhase = 'hero'
    return createStoryScroll({
      trackEl: trackRef.current,
      reducedMotion,
      onProgress: (p) => {
        progressRef.current = p
      },
      onPhase: (phase) => {
        if (phase !== lastPhase) {
          lastPhase = phase
          setPhase(phase)
        }
      },
    })
  }, [reducedMotion, progressRef, setPhase])

  const onLoaderDone = useCallback(() => setBootDone(true), [])

  return (
    <>
      <Loader
        progress={Math.max(loadProgress, loaded ? 1 : loadProgress)}
        ready={loaded && loadProgress >= 0.95}
        onDone={onLoaderDone}
      />

      <Suspense fallback={null}>
        <StoryCanvas activeService={activeService} />
      </Suspense>

      <main id="main" className={bootDone ? 'opacity-100' : 'opacity-90'}>
        <div ref={trackRef} className="relative">
          <Hero />
          <DigitalNepal />
          <DigitalTransformation />
          <TechMitraReveal />
          <Services onActiveChange={setActiveService} />
          <Solutions />
          <Products />
          <Portfolio />
          <Process />
          <AI />
          <Cloud />
          <Security />
          <About />
          <Global />
          <Insights />
          <Testimonials />
          <ContactCTA />
        </div>
      </main>
    </>
  )
}

export default function HomePage() {
  return (
    <StoryProvider>
      <HomeExperience />
    </StoryProvider>
  )
}
