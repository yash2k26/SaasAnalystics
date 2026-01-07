'use client'

import { ChartArea, ChartColumnIncreasing, ChevronDown, ChevronUp, CircleQuestionMark, CircleUser, EllipsisVertical, Folder, Gauge, LogOut, PlusCircle, ReceiptText, Search, Settings, User } from 'lucide-react'
import React, { useState } from 'react'
import NavItems from './NavItems'
import PopInsidecontent from './PopInsidecontent'
import {AnimatePresence, motion} from "motion/react"

export default function Sidebar() {

  const OpenupVarients = {
    closed : {
        opacity:0,
        scale:0.98,
        y:4
    },
    opened:{
        opacity:1,
        scale:1,
        transition: {
                duration:0.16,
                ease : "easeInOut"
        }   
    }
  }

  const TapVarient = {
                      opacity:1,
                      scale:0.98,
                      transition:{
                          duration:0.2
                      }
                    }

  const mockWorkspaces = [
    { id: "1", name: "Achme Inc" },
    { id: "2", name: "Clinic Plus" },
  ]; 

  const [profile , setprofile] = useState(false)
  const [WorkspaceOpen , setWorkspaceOpen] = useState(false)
  const [ActiveWorkspace , setActiveWorkspace] = useState(mockWorkspaces[0])
  return (
    <>
    <nav className='flex h-full flex-col px-4 py-5'>
            <motion.button
              whileTap={TapVarient}   
              key={ActiveWorkspace.id}
              onClick={()=>setWorkspaceOpen(!WorkspaceOpen)} 
              className='text-xl cursor-pointer relative flex font-semibold mb-7  '>

              
              {ActiveWorkspace.name}
              {
                WorkspaceOpen ?
                  <motion.div
                    animate = {{rotate : WorkspaceOpen ? 0 : 180 }}
                    transition={{duration:0.18 , ease:"easeOut"}}
                  >
                    <ChevronUp className='my-auto m-2 font-extrabold cursor-pointer '/>
                  </motion.div>      :
                  <motion.div
                     animate = {{rotate : WorkspaceOpen ? 180 : 0 }}
                     transition={{duration:0.18 , ease:"easeOut"}}
                  >
                    <ChevronDown className='my-auto m-2 font-extrabold cursor-pointer '/>
                  </motion.div>
              }
              

            </motion.button>
        
        <AnimatePresence>
        {
          WorkspaceOpen &&  <motion.div
                              variants={OpenupVarients}
                              initial = "closed"
                              animate="opened"
                              exit="closed"
                                                          
                              className='rounded-xl left-40 absolute z-10 flex flex-col gap-1.5 px-2 py-2.5 bg-neutral-900 border border-neutral-700  '>
            {mockWorkspaces.map((ws)=>(
                    <motion.button
                    onClick={
                      ()=>{
                        setActiveWorkspace(ws)
                        setWorkspaceOpen(false)
                      }
                    }
                    className={`flex p-2 rounded-md cursor-pointer ${ActiveWorkspace.name === ws.name && `bg-neutral-600` } hover:bg-neutral-600 items-center text-center  gap-2 text-sm  `}>
                      <motion.p>
                        {ws.name}
                      </motion.p>
                    </motion.button>
              ))
            }
               <div className="my-1 h-px bg-neutral-200/70  " />
                    <div className='flex p-2 rounded-md cursor-pointer hover:bg-neutral-600 items-center text-center  gap-2 text-sm '>
                        <PlusCircle className='size-4'/> <p>Add a Workspace</p>
              </div>
          </motion.div>
        }
      </AnimatePresence>
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
            <AnimatePresence>
            {
              profile && 
                        <motion.div
                          initial = "closed"
                          animate="opened"
                          exit="closed"
                          variants={OpenupVarients}  
                         className='absolute bottom-full  translate-y-14 left-52 ml-1 mb-2 w-64 rounded-xl border-neutral-800  bg-neutral-900 shadow-xl z-50 border '>
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

                        </motion.div>
            } 
            </AnimatePresence>
          </div>
          
        </div>
      
    
    </nav>
    </>
  )
}
