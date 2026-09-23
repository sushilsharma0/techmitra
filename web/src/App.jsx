import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { RootLayout } from './components/Layout/RootLayout'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import SolutionsPage from './pages/SolutionsPage'
import WorkPage from './pages/WorkPage'
import AboutPage from './pages/AboutPage'
import InsightsPage from './pages/InsightsPage'
import ContactPage from './pages/ContactPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'solutions', element: <SolutionsPage /> },
      { path: 'work', element: <WorkPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'insights', element: <InsightsPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
