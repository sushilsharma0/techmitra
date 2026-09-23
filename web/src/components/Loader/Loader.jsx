import { useEffect, useState } from 'react'
import { brand } from '../../data/content'

export function Loader({ progress = 0, ready = false, onDone }) {
  const [visible, setVisible] = useState(true)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    if (!ready) return
    const t = setTimeout(() => setExiting(true), 200)
    const t2 = setTimeout(() => {
      setVisible(false)
      onDone?.()
    }, 900)
    return () => {
      clearTimeout(t)
      clearTimeout(t2)
    }
  }, [ready, onDone])

  if (!visible) return null

  const pct = Math.round(Math.min(100, Math.max(0, progress * 100)))

  return (
    <div
      className={`fixed inset-0 z-[var(--z-loader)] flex flex-col items-center justify-center bg-midnight transition-opacity duration-700 ${
        exiting ? 'opacity-0' : 'opacity-100'
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading TechMitra experience"
    >
      <p className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
        <span className="text-himalayan">TECH</span>
        <span className="text-cyan">MITRA</span>
      </p>
      <p className="mt-4 text-sm text-body">Loading the digital frontier...</p>
      <div className="mt-8 h-px w-48 overflow-hidden bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-electric to-cyan transition-[width] duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="mt-3 font-display text-xs tracking-[0.2em] text-body">{pct}%</p>
      <p className="sr-only">{brand.tagline}</p>
    </div>
  )
}
