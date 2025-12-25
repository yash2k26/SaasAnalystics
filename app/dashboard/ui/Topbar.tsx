import { Gauge, PlusCircle } from 'lucide-react'
import React from 'react'
import Customselector from './Customselector'

export default function Topbar() {
  return (
    <div className='flex  justify-between items-center   shadow-white px-6 h-full'>
       <p>Dashboard</p>
       
       <Customselector/>

       <button className='flex rounded-xl bg-[#ec4899] p-1.5 text-md cursor-pointer '>
              Create New <PlusCircle className='m-2 size-5 my-auto '/> 
        </button>
    </div>
  )
}
