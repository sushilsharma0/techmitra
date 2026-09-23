import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { services } from '../../data/content'

export function ServiceEcosystem({ activeId = null }) {
  const group = useRef()
  const nodes = useMemo(() => {
    const radius = 2.6
    return services.map((service, i) => {
      const angle = (i / services.length) * Math.PI * 2 - Math.PI / 2
      return {
        ...service,
        position: [Math.cos(angle) * radius, Math.sin(angle) * radius * 0.55, Math.sin(angle) * 0.4],
      }
    })
  }, [])

  useFrame(({ clock }) => {
    if (!group.current) return
    group.current.rotation.y = clock.elapsedTime * 0.08
  })

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[0.45, 24, 24]} />
        <meshStandardMaterial
          color="#1677ff"
          emissive="#00d9ff"
          emissiveIntensity={0.8}
          metalness={0.5}
          roughness={0.25}
        />
      </mesh>
      {nodes.map((node) => {
        const active = activeId === node.id
        return (
          <group key={node.id} position={node.position}>
            <mesh scale={active ? 1.35 : 1}>
              <icosahedronGeometry args={[0.18, 0]} />
              <meshStandardMaterial
                color={active ? '#00d9ff' : '#0b2a5b'}
                emissive={active ? '#1677ff' : '#081426'}
                emissiveIntensity={active ? 1.2 : 0.3}
              />
            </mesh>
            <line>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  args={[new Float32Array([0, 0, 0, -node.position[0], -node.position[1], -node.position[2]]), 3]}
                />
              </bufferGeometry>
              <lineBasicMaterial color="#1677ff" transparent opacity={active ? 0.9 : 0.35} />
            </line>
          </group>
        )
      })}
    </group>
  )
}

export function GlobeMesh({ highlightNepal = true }) {
  const ref = useRef()
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.12
  })

  return (
    <group ref={ref}>
      <mesh>
        <sphereGeometry args={[2.2, 48, 48]} />
        <meshStandardMaterial
          color="#081426"
          emissive="#0b2a5b"
          emissiveIntensity={0.4}
          wireframe
          transparent
          opacity={0.7}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[2.18, 32, 32]} />
        <meshStandardMaterial color="#050b18" transparent opacity={0.55} />
      </mesh>
      {highlightNepal && (
        <mesh position={[0.55, 0.35, 2.05]}>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshBasicMaterial color="#f5b942" />
        </mesh>
      )}
      <ConnectionArcs />
    </group>
  )
}

function ConnectionArcs() {
  const curves = useMemo(() => {
    const start = new THREE.Vector3(0.55, 0.35, 2.05)
    const ends = [
      new THREE.Vector3(-1.4, 0.8, 1.4),
      new THREE.Vector3(1.6, 0.2, -1.3),
      new THREE.Vector3(-0.4, -1.2, 1.6),
      new THREE.Vector3(1.1, 1.5, 0.6),
    ]
    return ends.map((end) => {
      const mid = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(2.8)
      return new THREE.QuadraticBezierCurve3(start, mid, end)
    })
  }, [])

  return curves.map((curve, i) => {
    const points = curve.getPoints(24)
    const arr = new Float32Array(points.flatMap((p) => [p.x, p.y, p.z]))
    return (
      <line key={i}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[arr, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#00d9ff" transparent opacity={0.45} />
      </line>
    )
  })
}

export function ShieldCore() {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (!ref.current) return
    ref.current.rotation.y = clock.elapsedTime * 0.4
    ref.current.scale.setScalar(1 + Math.sin(clock.elapsedTime * 2) * 0.03)
  })
  return (
    <group ref={ref}>
      <mesh>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshStandardMaterial
          color="#0b2a5b"
          emissive="#1677ff"
          emissiveIntensity={0.55}
          wireframe
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.55, 24, 24]} />
        <meshStandardMaterial color="#00d9ff" emissive="#00d9ff" emissiveIntensity={0.8} />
      </mesh>
    </group>
  )
}

export function CloudStack() {
  const layers = [1.8, 1.1, 0.4, -0.3, -1.0, -1.7]
  return (
    <group>
      {layers.map((y, i) => (
        <mesh key={i} position={[0, y, 0]}>
          <boxGeometry args={[2.4 - i * 0.15, 0.28, 1.4]} />
          <meshStandardMaterial
            color="#0b2a5b"
            emissive="#1677ff"
            emissiveIntensity={0.25 + i * 0.05}
            transparent
            opacity={0.85}
          />
        </mesh>
      ))}
    </group>
  )
}

export function AICore() {
  const core = useRef()
  useFrame(({ clock }) => {
    if (core.current) core.current.rotation.y = clock.elapsedTime * 0.5
  })
  return (
    <group>
      <mesh ref={core}>
        <torusKnotGeometry args={[0.7, 0.18, 100, 16]} />
        <meshStandardMaterial color="#1677ff" emissive="#00d9ff" emissiveIntensity={0.7} />
      </mesh>
      <AtmospherePulse />
    </group>
  )
}

function AtmospherePulse() {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (!ref.current) return
    const s = 1.4 + Math.sin(clock.elapsedTime * 1.5) * 0.15
    ref.current.scale.setScalar(s)
    ref.current.material.opacity = 0.25 + Math.sin(clock.elapsedTime * 1.5) * 0.1
  })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 24, 24]} />
      <meshBasicMaterial color="#00d9ff" transparent opacity={0.25} wireframe />
    </mesh>
  )
}
