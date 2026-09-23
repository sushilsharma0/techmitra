import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import { useLenis } from '../../hooks/useLenis'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function RootLayout() {
  const reducedMotion = useReducedMotion()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useLenis({ enabled: true, reducedMotion })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className={isHome ? '' : 'min-h-screen bg-midnight'}>
      <Navbar />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
