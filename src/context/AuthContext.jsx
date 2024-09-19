import { createContext, useContext, useState } from 'react'
export const AuthContext = createContext()

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useContext debe estar dentro de un provider')
  }
  return context
}

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({})
  const [isAuth, setIsAuth] = useState(false)

  return (
    <AuthContext.Provider value={{ isAuth }}>{children}</AuthContext.Provider>
  )
}
