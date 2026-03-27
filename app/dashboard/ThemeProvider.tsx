"use client"
import React, { createContext, useContext, useState } from 'react'

export type ThemeType = {
  name: string
  hex: string
}

type ThemeContextState = {
  theme: ThemeType
  setTheme: (t: ThemeType) => void
}

const ThemeContext = createContext<ThemeContextState | undefined>(undefined)

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>({ name: "Ocean", hex: "#0EA5E9" })

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider")
  return ctx
}
