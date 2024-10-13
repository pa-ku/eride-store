import { useAuth } from './context/AuthContext'
import { Navigate, Outlet } from 'react-router'

export default function ProtectedRoute() {
  const { isAuth } = useAuth()

  if (isAuth) return <Navigate to={'/'} replace />

  return <Outlet />
}
