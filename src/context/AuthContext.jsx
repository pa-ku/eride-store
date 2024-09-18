import { createContext } from 'react'
export const AuthContext = createContext()

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useContext debe estar dentro de un provider')
  }
  return context
}

export function AuthContextProvider({ children }) {
  function userLogin() {}

  function userRegister() {}

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}
