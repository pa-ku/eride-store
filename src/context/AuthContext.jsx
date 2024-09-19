import { createContext, useContext, useState } from 'react'
export const AuthContext = createContext()
import { loginRequest, registerRequest } from '../api/auth'

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

  async function userLogin(user) {
    try {
      const res = await loginRequest(user)
      setMessage(res.error)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  async function userRegister(user) {}

  return (
    <AuthContext.Provider value={{ userLogin, userRegister, user, isAuth,message }}>
      {children}
    </AuthContext.Provider>
  )
}
