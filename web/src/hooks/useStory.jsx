import { createContext, useContext, useMemo, useRef, useState } from 'react'

const StoryContext = createContext(null)

export function StoryProvider({ children }) {
  const progressRef = useRef(0)
  const [phase, setPhase] = useState('hero')
  const [loaded, setLoaded] = useState(false)
  const [webgl, setWebgl] = useState(true)

  const value = useMemo(
    () => ({
      progressRef,
      phase,
      setPhase,
      loaded,
      setLoaded,
      webgl,
      setWebgl,
    }),
    [phase, loaded, webgl],
  )

  return <StoryContext.Provider value={value}>{children}</StoryContext.Provider>
}

export function useStory() {
  const ctx = useContext(StoryContext)
  if (!ctx) throw new Error('useStory must be used within StoryProvider')
  return ctx
}

export function getPhaseFromProgress(p) {
  if (p < 0.08) return 'hero'
  if (p < 0.16) return 'approach'
  if (p < 0.24) return 'dissolve'
  if (p < 0.36) return 'nepal'
  if (p < 0.48) return 'digital'
  if (p < 0.56) return 'reveal'
  if (p < 0.68) return 'services'
  if (p < 0.78) return 'products'
  if (p < 0.86) return 'globe'
  if (p < 0.94) return 'contact'
  return 'loop'
}
