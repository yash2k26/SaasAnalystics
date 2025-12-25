"use client"
import { ArrowDown, ArrowDown01, ChevronDown } from 'lucide-react';
import React, { useState } from 'react'

const themes = [
  { name: "Rose", hex: "#ec4899" },
  { name: "Ocean", hex: "#0EA5E9" },
  { name: "Midnight", hex: "#020617" },
  { name: "Sapphire", hex: "#2563EB" },
  { name: "Emerald", hex: "#10B981" },
  { name: "Sage", hex: "#4ADE80" },
  { name: "Aurora", hex: "#F43F5E" },
  { name: "Plum", hex: "#7C3AED" },
  { name: "Carbon", hex: "#262626" },
  { name: "Sunset", hex: "#F97316" },
];

const Customselector = () => {
    const  [open , setopen] = useState(false)
    const [value , setvalue ] = useState("Rose")

  return (
    <div className='relative inline-block'>
      <button
      onClick={()=>setopen(open => !open)} 
      className='py-2 flex px-3 cursor-pointer bg-neutral-800 rounded-md text-md '>
        {value} <ChevronDown className='my-auto m-1 size-4'/>
      </button>
      {
        open && <div className='bg-neutral-800/40 border overflow-y-auto border-neutral-500/70 p-1 rounded-md z-20 absolute  '>
            {themes.map((opt)=>(
                <div
                onClick={()=>{
                    setvalue(opt.name)
                    setopen(open => !open)
                }}
                
                className='m-1 cursor-pointer hover:bg-neutral-700 p-1 text-center text-md rounded-md '>
                    {opt.name}
                </div>
            ))}
        </div>
      }
    </div>
  )
}

export default Customselector
