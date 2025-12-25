'use client'

import { ChartArea, ChartColumnIncreasing, ChevronDown, CircleQuestionMark, CircleUser, EllipsisVertical, Folder, Gauge, LogOut, ReceiptText, Search, Settings, User } from 'lucide-react'
import React, { useState } from 'react'
import NavItems from './NavItems'
import PopInsidecontent from './PopInsidecontent'

export default function Sidebar() {
  const [profile , setprofile] = useState(false)
  const [WorkspaceOpen , setWorkspaceOpen] = useState()
  return (
    <nav className='flex h-full flex-col px-4  py-5'>
        <div className='text-xl flex font-semibold mb-7  '>
            Achme .Inc <ChevronDown className='my-auto m-2 font-extrabold cursor-pointer '/>
 
        </div>
      

       <ul className="flex flex-col gap-1 text-sm">
        <NavItems icon={Gauge} label="Dashboard" />
        <NavItems icon={ChartColumnIncreasing} label="Analytics" />
        <NavItems icon={Folder} label="Projects" />
        <NavItems icon={User} label="Team" />
      </ul>

      <div className="mt-auto ">
        <ul className="flex flex-col gap-1 text-sm mb-4">
          <NavItems icon={Settings} label="Settings" />
          <NavItems icon={CircleQuestionMark} label="Get Help" />
          <NavItems icon={Search} label="Search" />
        </ul>
        <div className='relative'>
          <div
              onClick={()=>setprofile(profile => !profile)} 
              className="flex w-full items-center gap-3 rounded-xl p-2 hover:bg-neutral-800 cursor-pointer">
              <img
                src="assets/d835502d409557d85de9387cf3fd4065.jpg"
                className="h-9 w-9 rounded-lg object-cover"
                alt="Yash profile"
              />
              <div className="flex-1 leading-tight">
                <p className="text-sm font-medium">Yashuuu</p>
                <p className="text-xs text-neutral-400">yashu@gmail.com</p>
              </div>
              <EllipsisVertical className="size-4 opacity-60" />
            </div>
            {
              profile && 
                        <div className='absolute bottom-full  translate-y-14 left-52 ml-1 mb-2 w-64 rounded-xl border-neutral-800  bg-neutral-900 shadow-xl z-50 border '>
                              <div
                                className="border-b-neutral-600/70 border-b flex items-center gap-3  p-2 ">
                                <img
                                  src="assets/d835502d409557d85de9387cf3fd4065.jpg"
                                  className="h-9 w-9 rounded-lg object-cover"
                                  alt="Yash profile"
                                />
                                <div className="flex-1 leading-tight">
                                  <p className="text-sm font-medium">Yashuuu</p>
                                  <p className="text-xs text-neutral-400">yashu@gmail.com</p>
                                </div>
                              </div>
                              <div className=''>
                                  <ul className="flex flex-col gap-1  px-2 py-1.5  text-sm  ">
                                      <PopInsidecontent icon={CircleUser} label="Account" />
                                      <PopInsidecontent icon={ReceiptText} label="Biling" />
                                      <PopInsidecontent icon={Search} label="Search" />
                                  </ul>
                              </div>  
                              <div className="my-1 h-px bg-neutral-600/70  " />
                            
                              <ul className="flex flex-col gap-1  px-2 py-1.5  text-sm  ">
                                <PopInsidecontent icon={LogOut} label='Logout' />
                              </ul>

                        </div>
            } 
          </div>
          
        </div>
      
    
    </nav>
  )
}
