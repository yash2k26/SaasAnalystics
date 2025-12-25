import { Gauge, LucideIcon } from 'lucide-react'
import React from 'react'

type Naveitems = {
    icon : LucideIcon,
    label : string,
    
}

const NavItems = ({
        icon : Icon,
        label 

    }:Naveitems) => {
  return (
    <li 
        className=" flex gap-3 cursor-pointer hover:opacity-100 hover:bg-neutral-800 rounded-xl p-2 "> 
            <Icon className='size-4 my-auto' /> 
            <span className=''>{label}</span> 
    </li>
  )
}

export default NavItems
