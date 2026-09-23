import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function AtmosphereParticles({ count = 1200, color = '#cfe8ff', spread = 18, speed = 0.15 }) {
  const ref = useRef()
  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const velocities = new Float32Array(count)
    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * spread
      positions[i * 3 + 1] = Math.random() * spread * 0.6
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread
      velocities[i] = 0.2 + Math.random() * 0.8
    }
    return { positions, velocities }
  }, [count, spread])

  useFrame((_, delta) => {
    const mesh = ref.current
    if (!mesh) return
    const arr = mesh.geometry.attributes.position.array
    for (let i = 0; i < count; i += 1) {
      arr[i * 3 + 1] -= delta * speed * velocities[i]
      if (arr[i * 3 + 1] < -2) {
        arr[i * 3 + 1] = spread * 0.55
        arr[i * 3] = (Math.random() - 0.5) * spread
        arr[i * 3 + 2] = (Math.random() - 0.5) * spread
      }
    }
    mesh.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color={color}
        transparent
        opacity={0.65}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  )
}

export function StarField({ count = 800 }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i += 1) {
      const r = 40 + Math.random() * 40
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.cos(phi)
      arr[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta)
    }
    return arr
  }, [count])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#e8f1ff" transparent opacity={0.8} depthWrite={false} />
    </points>
  )
}

export function MorphParticles({
  count = 2000,
  morph = 0,
  morphRef,
  targets = 'nepal',
  color = '#00d9ff',
}) {
  const ref = useRef()
  const data = useMemo(() => {
    const from = new Float32Array(count * 3)
    const to = new Float32Array(count * 3)
    for (let i = 0; i < count; i += 1) {
      const a = Math.random() * Math.PI * 2
      const r = Math.random() * 2.2
      from[i * 3] = Math.cos(a) * r * 0.8
      from[i * 3 + 1] = 1.5 + Math.random() * 3.2
      from[i * 3 + 2] = Math.sin(a) * r * 0.8 - 1

      if (targets === 'nepal') {
        const u = Math.random()
        const v = Math.random()
        const nx = (u - 0.5) * 6.5
        const nz = (v - 0.5) * 3.2
        const edge =
          Math.abs(nx) < 3.1 &&
          Math.abs(nz) < 1.4 + Math.sin((nx + 3) * 0.7) * 0.35
        to[i * 3] = edge ? nx : (Math.random() - 0.5) * 5.5
        to[i * 3 + 1] = 0.1 + Math.random() * 0.35
        to[i * 3 + 2] = edge ? nz : (Math.random() - 0.5) * 2.6
      } else if (targets === 'logo') {
        const t = i / count
        const letter = t < 0.5 ? -1.1 : 1.1
        to[i * 3] = letter + (Math.random() - 0.5) * 0.55
        to[i * 3 + 1] = (Math.random() - 0.5) * 1.6
        to[i * 3 + 2] = (Math.random() - 0.5) * 0.3
      } else {
        const phi = Math.acos(2 * Math.random() - 1)
        const theta = Math.random() * Math.PI * 2
        const radius = 2.4
        to[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
        to[i * 3 + 1] = radius * Math.cos(phi)
        to[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta)
      }
    }
    return { from, to, current: new Float32Array(from) }
  }, [count, targets])

  useFrame(() => {
    const mesh = ref.current
    if (!mesh) return
    const arr = mesh.geometry.attributes.position.array
    const t = THREE.MathUtils.clamp(morphRef?.current ?? morph, 0, 1)
    for (let i = 0; i < count * 3; i += 1) {
      arr[i] = data.from[i] * (1 - t) + data.to[i] * t
    }
    mesh.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[data.current, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color={color}
        transparent
        opacity={0.85}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
