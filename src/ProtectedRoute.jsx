import { useAuth } from './context/AuthContext'
import { Navigate, Outlet } from 'react-router'

export default function ProtectedRoute() {
  const { loading, isAuth } = useAuth()

  if (loading && !isAuth) return <Navigate to={'/user/login'} replace />

  return <Outlet />
}
