import gsap from 'gsap'

export function playHeroIntro({ logo, lines, ctas, indicator, reducedMotion }) {
  if (reducedMotion) {
    gsap.set([logo, lines, ctas, indicator].flat().filter(Boolean), { opacity: 1, y: 0 })
    return () => {}
  }

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  if (logo) {
    tl.fromTo(logo, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.8 }, 0.3)
  }
  if (lines?.length) {
    tl.fromTo(
      lines,
      { opacity: 0, y: 36 },
      { opacity: 1, y: 0, duration: 0.85, stagger: 0.14 },
      0.55,
    )
  }
  if (ctas) {
    tl.fromTo(ctas, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.2')
  }
  if (indicator) {
    tl.fromTo(indicator, { opacity: 0 }, { opacity: 0.8, duration: 0.6 }, '-=0.1')
    gsap.to(indicator.querySelector('[data-arrow]'), {
      y: 8,
      repeat: -1,
      yoyo: true,
      duration: 1.1,
      ease: 'sine.inOut',
    })
  }

  return () => tl.kill()
}
