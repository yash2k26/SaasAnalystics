import { Gauge, LucideIcon } from 'lucide-react'
import React from 'react'

type PopInsidecontentProps = {
    icon : LucideIcon,
    label : string,
    
}

const PopInsidecontent = ({
        icon : Icon,
        label 

    }:PopInsidecontentProps) => {
  return (
    <li 
        className=" flex gap-3 cursor-pointer hover:opacity-100 hover:bg-neutral-800 rounded-xl p-2 "> 
            <Icon className='size-4 my-auto text-neutral-400' /> 
            <span className=''>{label}</span> 
    </li>
  )
}

export default PopInsidecontent
