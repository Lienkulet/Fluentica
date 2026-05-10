'use client'
import { createContext, useContext, useState } from 'react'

const NavMenuContext = createContext()

export function NavMenuProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [heroInView, setHeroInView] = useState(true)
  return (
    <NavMenuContext.Provider value={{ menuOpen, setMenuOpen, heroInView, setHeroInView }}>
      {children}
    </NavMenuContext.Provider>
  )
}

export function useNavMenu() {
  return useContext(NavMenuContext)
}
