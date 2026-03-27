'use client'
import { LucideIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'

const NavItems = ({ icon: Icon, label }: { icon: LucideIcon; label: string }) => {
  const pathname = usePathname()
  const href = `/${label.toLowerCase()}`
  const isActive = pathname === href || (label === 'Dashboard' && pathname === '/dashboard')

  return (
    <li
      className={`flex items-center gap-2.5 cursor-pointer rounded-lg px-3 py-2 transition-colors ${
        isActive
          ? 'bg-neutral-800 text-white'
          : 'text-neutral-400 hover:bg-neutral-800/60 hover:text-white'
      }`}
    >
      <Icon className='size-4 shrink-0' />
      <span className='text-sm font-medium'>{label}</span>
    </li>
  )
}

export default NavItems
