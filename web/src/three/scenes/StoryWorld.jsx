import { useEffect, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Cloud } from '@react-three/drei'
import * as THREE from 'three'
import { MountainRange, DistantPeaks } from '../models/Mountain'
import { AtmosphereParticles, MorphParticles, StarField } from '../effects/Particles'
import { NepalMap } from '../models/NepalMap'
import {
  AICore,
  CloudStack,
  GlobeMesh,
  ServiceEcosystem,
  ShieldCore,
} from '../models/TechObjects'
import { mapRange } from '../../utils/math'

/**
 * Continuous 3D story world — reads scroll progress from a ref each frame.
 */
export function StoryWorld({
  progressRef,
  particleCount = 1800,
  reducedMotion = false,
  activeService = null,
}) {
  const mouse = useRef({ x: 0, y: 0 })
  const mountainGroup = useRef()
  const morphNepal = useRef()
  const morphLogo = useRef()
  const morphContact = useRef()
  const nepalGroup = useRef()
  const servicesGroup = useRef()
  const aiGroup = useRef()
  const cloudGroup = useRef()
  const securityGroup = useRef()
  const globeGroup = useRef()
  const dissolveRef = useRef(0)
  const morphNepalAmount = useRef(0)
  const morphLogoAmount = useRef(0)
  const morphContactAmount = useRef(0)

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  useFrame(({ camera, clock }) => {
    const p = progressRef?.current ?? 0
    const t = reducedMotion ? 0 : 1
    const breathe = Math.sin(clock.elapsedTime * 0.25) * 0.08 * t

    dissolveRef.current = mapRange(p, 0.12, 0.22, 0, 1)
    morphNepalAmount.current = p < 0.22 ? dissolveRef.current : p < 0.48 ? 1 : 0
    morphLogoAmount.current = mapRange(p, 0.48, 0.56, 0, 1)
    morphContactAmount.current = mapRange(p, 0.92, 1, 0, 1)

    if (mountainGroup.current) mountainGroup.current.visible = p < 0.24 || p > 0.88
    if (morphNepal.current) morphNepal.current.visible = p > 0.14 && p < 0.48
    if (morphLogo.current) morphLogo.current.visible = p >= 0.48 && p < 0.68
    if (nepalGroup.current) nepalGroup.current.visible = p > 0.22 && p < 0.48
    if (servicesGroup.current) servicesGroup.current.visible = p > 0.56 && p < 0.7
    if (aiGroup.current) aiGroup.current.visible = p > 0.68 && p < 0.75
    if (cloudGroup.current) cloudGroup.current.visible = p > 0.74 && p < 0.79
    if (securityGroup.current) securityGroup.current.visible = p > 0.78 && p < 0.84
    if (globeGroup.current) globeGroup.current.visible = p > 0.82 && p < 0.92
    if (morphContact.current) morphContact.current.visible = p > 0.92

    let camPos = new THREE.Vector3(0, 1.6, 8)
    let look = new THREE.Vector3(0, 1.2, 0)

    if (p < 0.12) {
      camPos.set(0 + mouse.current.x * 0.3 * t, 1.8 + breathe, 9.2 - p * 6)
      look.set(0, 1.8, -1)
    } else if (p < 0.22) {
      const local = mapRange(p, 0.12, 0.22, 0, 1)
      camPos.set(0, 2.5 + local * 2, 6 - local * 4)
      look.set(0, 2 + local, -1)
    } else if (p < 0.4) {
      camPos.set(0, 3.5, 5)
      look.set(0, 0.2, 0)
    } else if (p < 0.56) {
      camPos.set(0, 1.8, 5.2)
      look.set(0, 0.3, 0)
    } else if (p < 0.82) {
      camPos.set(0, 1.2, 6)
      look.set(0, 0, 0)
    } else if (p < 0.9) {
      camPos.set(0, 1.4, 7)
      look.set(0, 0, 0)
    } else {
      const local = mapRange(p, 0.9, 1, 0, 1)
      camPos.set(0, 1.5 + local * 0.4, 7.2)
      look.set(0, 1.4, -1)
    }

    camera.position.lerp(camPos, reducedMotion ? 1 : 0.06)
    camera.lookAt(look)
  })

  return (
    <group>
      <color attach="background" args={['#050b18']} />
      <fog attach="fog" args={['#050b18', 12, 42]} />
      <ambientLight intensity={0.45} />
      <directionalLight position={[6, 10, 4]} intensity={1.45} color="#e8f1ff" />
      <directionalLight position={[-4, 3, -6]} intensity={0.45} color="#1677ff" />
      <pointLight position={[0, 4, 2]} intensity={0.85} color="#00d9ff" />
      <hemisphereLight args={['#9ec9ff', '#050b18', 0.35]} />

      <StarField count={Math.floor(particleCount * 0.35)} />

      <group ref={mountainGroup}>
        <DistantPeaks />
        <MountainRange dissolveRef={dissolveRef} accent="#6f8fb0" />
        {!reducedMotion && (
          <>
            <Cloud position={[-4, 3.2, -2]} speed={0.05} opacity={0.25} segments={8} />
            <Cloud position={[3.5, 2.8, -3]} speed={0.04} opacity={0.2} segments={8} />
          </>
        )}
        <AtmosphereParticles
          count={Math.floor(particleCount * 0.4)}
          color="#dce9f8"
          spread={16}
        />
      </group>

      <group ref={morphNepal}>
        <MorphParticles
          count={particleCount}
          morphRef={morphNepalAmount}
          targets="nepal"
          color="#00d9ff"
        />
      </group>

      <group ref={morphLogo}>
        <MorphParticles
          count={Math.floor(particleCount * 0.8)}
          morphRef={morphLogoAmount}
          targets="logo"
          color="#1677ff"
        />
      </group>

      <group ref={nepalGroup} position={[0, 0.1, 0]}>
        <NepalMap intensity={1} />
      </group>

      <group ref={servicesGroup}>
        <ServiceEcosystem activeId={activeService} />
      </group>

      <group ref={aiGroup}>
        <AICore />
      </group>
      <group ref={cloudGroup}>
        <CloudStack />
      </group>
      <group ref={securityGroup}>
        <ShieldCore />
      </group>
      <group ref={globeGroup}>
        <GlobeMesh />
      </group>

      <group ref={morphContact}>
        <MorphParticles
          count={Math.floor(particleCount * 0.7)}
          morphRef={morphContactAmount}
          targets="logo"
          color="#f5b942"
        />
      </group>
    </group>
  )
}
