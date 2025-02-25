import { Navigate, Outlet } from 'react-router'
import { useAuth } from '#context/AuthContext'

export default function IsAuthRedirect() {
  const { isAuth } = useAuth()

  if (isAuth) return <Navigate to={'/'} replace />

  return <Outlet />
}
