import { useEffect, useState } from 'react'

export function detectWebGL() {
  try {
    const canvas = document.createElement('canvas')
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  } catch {
    return false
  }
}

export function useWebGL() {
  const [supported, setSupported] = useState(true)

  useEffect(() => {
    setSupported(detectWebGL())
  }, [])

  return supported
}
