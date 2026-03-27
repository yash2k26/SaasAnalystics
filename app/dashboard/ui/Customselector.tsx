"use client"
import { Check, ChevronDown } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'
import { useTheme } from '../ThemeProvider'
import { motion, AnimatePresence } from "motion/react"

const themes = [
  { name: "Rose",     hex: "#ec4899" },
  { name: "Ocean",    hex: "#0EA5E9" },
  { name: "Sapphire", hex: "#2563EB" },
  { name: "Emerald",  hex: "#10B981" },
  { name: "Plum",     hex: "#7C3AED" },
  { name: "Sunset",   hex: "#F97316" },
  { name: "Sage",     hex: "#4ADE80" },
  { name: "Aurora",   hex: "#F43F5E" },
  { name: "Carbon",   hex: "#525252" },
]

const Customselector = () => {
  const { theme, setTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div className='relative' ref={ref}>
      <button
        onClick={() => setOpen(o => !o)}
        className='flex items-center gap-2.5 py-2 px-3.5 cursor-pointer bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-xl text-sm font-medium transition-colors'
      >
        <span className='size-2.5 rounded-full shrink-0' style={{ backgroundColor: theme.hex }} />
        <span className='text-neutral-200'>{theme.name}</span>
        <ChevronDown className={`size-3.5 text-neutral-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className='absolute top-full mt-2 left-0 z-50 w-48 bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden p-1.5'
          >
            <p className='px-2.5 pt-1.5 pb-2 text-[10px] font-bold text-neutral-600 uppercase tracking-widest'>Theme</p>
            {themes.map((opt) => {
              const isActive = theme.hex === opt.hex
              return (
                <button
                  key={opt.name}
                  onClick={() => { setTheme(opt); setOpen(false) }}
                  className={`w-full flex items-center gap-3 px-2.5 py-2 text-sm rounded-xl transition-colors cursor-pointer ${isActive ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:bg-neutral-800/60 hover:text-neutral-200'}`}
                >
                  <span className='size-3 rounded-full shrink-0 ring-1 ring-white/10' style={{ backgroundColor: opt.hex }} />
                  <span className='flex-1 text-left font-medium'>{opt.name}</span>
                  {isActive && <Check className='size-3.5 text-neutral-400' />}
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Customselector
