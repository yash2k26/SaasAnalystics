"use client"
import { Gauge, PlusCircle } from 'lucide-react'
import React from 'react'
import Customselector from './Customselector'
import { useTheme } from '../ThemeProvider'

export default function Topbar() {
  const {theme } = useTheme()
  return (
    <div className='flex  justify-between items-center   shadow-white px-6 h-full'>

       
       <Customselector/>

       <button 
       className='flex rounded-xl justify-center items-center bg-[#ec4899] px-1.5 py-2 text-md cursor-pointer '
       style={{
          backgroundColor: theme
       }}
       >
       
              Create New <PlusCircle className='m-2 size-5 my-auto '/> 
        </button>
    </div>
  )
}
