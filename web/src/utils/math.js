import clsx from 'clsx'

export function cn(...inputs) {
  return clsx(inputs)
}

export function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value))
}

export function lerp(a, b, t) {
  return a + (b - a) * t
}

export function mapRange(value, inMin, inMax, outMin, outMax) {
  const t = (value - inMin) / (inMax - inMin)
  return lerp(outMin, outMax, clamp(t, 0, 1))
}
