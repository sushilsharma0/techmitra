import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { nepalLocations } from '../../data/content'

/** Stylized floating Nepal map with nodes and connective trails */
export function NepalMap({ intensity = 1 }) {
  const group = useRef()
  const shape = useMemo(() => {
    const s = new THREE.Shape()
    // Abstract Nepal silhouette (not cartographically perfect — narrative form)
    s.moveTo(-3.2, 0.2)
    s.lineTo(-2.4, 1.1)
    s.lineTo(-0.8, 1.35)
    s.lineTo(0.6, 1.2)
    s.lineTo(2.1, 0.95)
    s.lineTo(3.0, 0.35)
    s.lineTo(2.7, -0.55)
    s.lineTo(1.2, -1.15)
    s.lineTo(-0.4, -1.25)
    s.lineTo(-1.8, -0.95)
    s.lineTo(-3.0, -0.35)
    s.closePath()
    const geo = new THREE.ExtrudeGeometry(s, {
      depth: 0.28,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.04,
      bevelSegments: 2,
    })
    geo.rotateX(-Math.PI / 2)
    return geo
  }, [])

  const nodes = useMemo(
    () =>
      nepalLocations.map((loc) => ({
        ...loc,
        position: [(loc.x - 0.5) * 6.2, 0.4, (loc.y - 0.5) * 2.8],
      })),
    [],
  )

  const lines = useMemo(() => {
    const pts = []
    for (let i = 0; i < nodes.length - 1; i += 1) {
      pts.push(new THREE.Vector3(...nodes[i].position))
      pts.push(new THREE.Vector3(...nodes[i + 1].position))
    }
    return pts
  }, [nodes])

  useFrame(({ clock }) => {
    if (!group.current) return
    group.current.rotation.y = Math.sin(clock.elapsedTime * 0.2) * 0.12
    group.current.position.y = Math.sin(clock.elapsedTime * 0.4) * 0.08
  })

  return (
    <group ref={group} scale={intensity}>
      <mesh geometry={shape} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#0b2a5b"
          emissive="#1677ff"
          emissiveIntensity={0.35}
          metalness={0.4}
          roughness={0.35}
          transparent
          opacity={0.92}
        />
      </mesh>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[new Float32Array(lines.flatMap((v) => [v.x, v.y, v.z])), 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00d9ff" transparent opacity={0.55} />
      </lineSegments>
      {nodes.map((node) => (
        <mesh key={node.id} position={node.position}>
          <sphereGeometry args={[0.07, 12, 12]} />
          <meshBasicMaterial color="#f5b942" />
        </mesh>
      ))}
    </group>
  )
}
