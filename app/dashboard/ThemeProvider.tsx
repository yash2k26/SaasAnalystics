"use client"
import React, {  createContext, useContext, useState } from 'react'

const ThemeContext = createContext<ThemeType | undefined>(undefined)

type Theme = 
  | "Rose"
  | "Ocean"
  | "Midnight"
  | "Sapphire"
  | "Emerald"
  | "Sage"
  | "Aurora"
  | "Plum"
  | "Carbon"
  | "Sunset"


type ThemeType = {
    theme : Theme,
    setTheme : (t:any)=>void
}

export default function ThemeProvider({children}:any) {
    const [theme , setTheme ] = useState<Theme>("Rose")
  return (
    
    <ThemeContext.Provider value={{theme,setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
    const ctx = useContext(ThemeContext)
    if (!ctx) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return ctx;
}