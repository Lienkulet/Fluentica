'use client'
import { createContext, useContext, useState } from 'react'

const NavMenuContext = createContext()

export function NavMenuProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <NavMenuContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </NavMenuContext.Provider>
  )
}

export function useNavMenu() {
  return useContext(NavMenuContext)
}
