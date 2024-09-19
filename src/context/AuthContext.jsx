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
  const [user, setUser] = useState(null)
  const [isAuth, setIsAuth] = useState(false)
  const [message, setMessage] = useState('')

  function userLogin(user) {}

  function userRegister(user) {}

  return (
    <AuthContext.Provider value={{ userLogin, userRegister, user, isAuth }}>
      {children}
    </AuthContext.Provider>
  )
}
