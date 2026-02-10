import clsx from 'clsx'
import { Gauge, LucideIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'

type Naveitems = {
    icon : LucideIcon,
    label : string,
    
}

const NavItems = ({
        icon : Icon,
        label 

    }:Naveitems) => {

    const nav = [ 
      { name: 'Dashboard', href: '/dashboard' },
      { name: 'Analytics', href: '/analytics' },
      { name: 'Projects', href: '/projects' },
      { name: 'Team', href: '/team' },
    ]  
    
    const pathname = usePathname()

  return (
    // const active = pathname == href

    <li 
        className= 
            "flex gap-3 cursor-pointer hover:opacity-100 hover:bg-neutral-800 rounded-xl px-3 py-2 "
              
             > 
            <Icon className='size-4 my-auto' /> 
            <span className=''>{label}</span> 
    </li>
  )
}

export default NavItems
