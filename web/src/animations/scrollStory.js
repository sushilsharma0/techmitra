import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getPhaseFromProgress } from '../hooks/useStory'

gsap.registerPlugin(ScrollTrigger)

/**
 * Drives global story progress from a tall scroll track.
 */
export function createStoryScroll({
  trackEl,
  onProgress,
  onPhase,
  reducedMotion = false,
}) {
  if (!trackEl) return () => {}

  const state = { progress: 0 }

  const tween = gsap.to(state, {
    progress: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: trackEl,
      start: 'top top',
      end: 'bottom bottom',
      scrub: reducedMotion ? false : 0.65,
      onUpdate: (self) => {
        const p = self.progress
        onProgress?.(p)
        onPhase?.(getPhaseFromProgress(p))
      },
    },
  })

  return () => {
    tween.scrollTrigger?.kill()
    tween.kill()
  }
}

export function revealLines(selector, trigger) {
  const els = gsap.utils.toArray(selector)
  if (!els.length) return () => {}

  const anim = gsap.fromTo(
    els,
    { y: 28, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.9,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: trigger || els[0],
        start: 'top 80%',
      },
    },
  )

  return () => {
    anim.scrollTrigger?.kill()
    anim.kill()
  }
}

export function createPortfolioScroll(sectionEl, trackEl, viewportEl) {
  if (!sectionEl || !trackEl) return () => {}

  const getTravel = () => {
    const viewport = viewportEl?.clientWidth || trackEl.parentElement?.clientWidth || sectionEl.clientWidth
    return Math.max(0, trackEl.scrollWidth - viewport)
  }

  const tween = gsap.to(trackEl, {
    x: () => -getTravel(),
    ease: 'none',
    scrollTrigger: {
      trigger: sectionEl,
      start: 'top top',
      end: () => `+=${Math.max(getTravel() * 1.15, sectionEl.clientWidth * 0.8)}`,
      pin: true,
      scrub: 0.8,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  })

  return () => {
    tween.scrollTrigger?.kill()
    tween.kill()
  }
}

export function createProcessTimeline(sectionEl, lineEl, steps) {
  if (!sectionEl || !lineEl) return () => {}

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionEl,
      start: 'top 60%',
      end: 'bottom 40%',
      scrub: true,
    },
  })

  tl.fromTo(lineEl, { scaleX: 0 }, { scaleX: 1, ease: 'none' })

  steps.forEach((step) => {
    tl.to(
      step,
      {
        opacity: 1,
        y: 0,
        duration: 0.2,
      },
      '>-0.05',
    )
  })

  return () => {
    tl.scrollTrigger?.kill()
    tl.kill()
  }
}
