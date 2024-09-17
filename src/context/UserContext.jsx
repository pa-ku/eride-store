 import { createContext } from 'react'
export const UserContext = createContext()

export function NameProvider({ children }) {


  return <UserContext.Provider value={'name'}>{children}</UserContext.Provider>}

  