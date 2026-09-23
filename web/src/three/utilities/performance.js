export function disposeObject(object) {
  if (!object) return

  object.traverse((child) => {
    if (child.geometry) child.geometry.dispose()
    if (child.material) {
      if (Array.isArray(child.material)) {
        child.material.forEach((m) => disposeMaterial(m))
      } else {
        disposeMaterial(child.material)
      }
    }
  })
}

function disposeMaterial(material) {
  if (!material) return
  Object.keys(material).forEach((key) => {
    const value = material[key]
    if (value && typeof value === 'object' && 'minFilter' in value) {
      value.dispose?.()
    }
  })
  material.dispose?.()
}

export function getParticleBudget({ isMobile, isTablet, reducedMotion }) {
  if (reducedMotion) return 200
  if (isMobile) return 600
  if (isTablet) return 1400
  return 2800
}
