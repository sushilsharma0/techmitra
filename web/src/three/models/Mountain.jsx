import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function heightFn(x, z) {
  const d = Math.sqrt(x * x + z * z)
  const peak = Math.exp(-d * d * 0.045) * 4.2
  const ridges =
    Math.sin(x * 0.55) * Math.cos(z * 0.4) * 0.55 +
    Math.sin(x * 1.4 + z * 0.7) * 0.22
  const secondary = Math.exp(-((x + 3.2) ** 2 + (z - 1.8) ** 2) * 0.08) * 2.1
  const tertiary = Math.exp(-((x - 4.5) ** 2 + (z + 2.4) ** 2) * 0.06) * 1.6
  return peak + ridges + secondary + tertiary
}

export function MountainRange({ dissolve = 0, dissolveRef, accent = '#8fb4d9' }) {
  const meshRef = useRef()
  const geo = useMemo(() => {
    const geometry = new THREE.PlaneGeometry(28, 18, 96, 64)
    geometry.rotateX(-Math.PI / 2)
    const pos = geometry.attributes.position
    for (let i = 0; i < pos.count; i += 1) {
      const x = pos.getX(i)
      const z = pos.getZ(i)
      pos.setY(i, heightFn(x, z))
    }
    geometry.computeVertexNormals()
    return geometry
  }, [])

  useFrame(({ clock }) => {
    if (!meshRef.current) return
    const d = dissolveRef?.current ?? dissolve
    meshRef.current.position.y = Math.sin(clock.elapsedTime * 0.15) * 0.03
    meshRef.current.material.opacity = 1 - d * 0.95
    meshRef.current.material.wireframe = d > 0.55
  })

  return (
    <mesh ref={meshRef} geometry={geo} position={[0, -1.2, -2]} castShadow receiveShadow>
      <meshStandardMaterial
        color={accent}
        roughness={0.82}
        metalness={0.12}
        flatShading
        transparent
        emissive="#0b1f3d"
        emissiveIntensity={0.18}
      />
    </mesh>
  )
}

export function DistantPeaks() {
  const geo = useMemo(() => {
    const geometry = new THREE.PlaneGeometry(40, 12, 48, 24)
    geometry.rotateX(-Math.PI / 2)
    const pos = geometry.attributes.position
    for (let i = 0; i < pos.count; i += 1) {
      const x = pos.getX(i)
      const z = pos.getZ(i)
      const h =
        Math.exp(-((x + 8) ** 2) * 0.02) * 2.4 +
        Math.exp(-((x - 6) ** 2) * 0.015) * 1.8 +
        Math.sin(x * 0.3) * 0.4
      pos.setY(i, h + z * 0.02)
    }
    geometry.computeVertexNormals()
    return geometry
  }, [])

  return (
    <mesh geometry={geo} position={[0, -0.4, -14]}>
      <meshStandardMaterial color="#1a3358" roughness={1} flatShading transparent opacity={0.85} />
    </mesh>
  )
}
