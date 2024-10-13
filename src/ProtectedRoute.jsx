import { useAuth } from './context/AuthContext'
import { Navigate, Outlet } from 'react-router'

export default function ProtectedRoute() {
  const { loading, isAuth } = useAuth()

  if (loading)
    <div className="flex h-screen items-center justify-center">
      <h1>Cargando...</h1>
    </div>

  if (!loading && !isAuth) return <Navigate to={'/user/login'} replace />
  if (!loading && isAuth) {
    return <Outlet />
  }
}
