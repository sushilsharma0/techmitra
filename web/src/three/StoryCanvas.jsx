import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import { StoryWorld } from './scenes/StoryWorld'
import { useStory } from '../hooks/useStory'
import { useIsMobile, useIsTablet } from '../hooks/useMediaQuery'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { getParticleBudget } from './utilities/performance'

export function StoryCanvas({ activeService = null }) {
  const { progressRef, setLoaded, webgl } = useStory()
  const isMobile = useIsMobile()
  const isTablet = useIsTablet()
  const reducedMotion = useReducedMotion()
  const [dpr, setDpr] = useState(1)

  useEffect(() => {
    setDpr(Math.min(window.devicePixelRatio || 1, isMobile ? 1.25 : 1.75))
  }, [isMobile])

  const particleCount = getParticleBudget({ isMobile, isTablet, reducedMotion })

  if (!webgl) {
    return (
      <div
        className="pointer-events-none fixed inset-0 z-[var(--z-canvas)] bg-[radial-gradient(ellipse_at_center,#0b2a5b_0%,#050b18_70%)]"
        aria-hidden
      >
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_20%_30%,rgba(0,217,255,0.15),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(22,119,255,0.12),transparent_45%)]" />
      </div>
    )
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[var(--z-canvas)]">
      <Canvas
        dpr={dpr}
        gl={{ antialias: !isMobile, alpha: false, powerPreference: 'high-performance' }}
        camera={{ position: [0, 1.6, 8], fov: 45, near: 0.1, far: 80 }}
        onCreated={() => setLoaded(true)}
      >
        <Suspense fallback={null}>
          <StoryWorld
            progressRef={progressRef}
            particleCount={particleCount}
            reducedMotion={reducedMotion}
            activeService={activeService}
          />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  )
}
