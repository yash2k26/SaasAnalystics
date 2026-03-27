'use client'

import { ChartColumnIncreasing, ChevronDown, CircleQuestionMark, CircleUser, EllipsisVertical, Folder, Gauge, LogOut, PlusCircle, ReceiptText, Search, Settings, User } from 'lucide-react'
import { useState } from 'react'
import NavItems from './NavItems'
import PopInsidecontent from './PopInsidecontent'
import { AnimatePresence, motion } from "motion/react"
import { useWorkspace } from '../WorkspaceProvider'
import CreateWorkspaceModal from './CreateWorkspaceModal'

export default function Sidebar() {
  const { workspaces, activeWorkspace, setActiveWorkspace } = useWorkspace()

  const [profileOpen, setProfileOpen] = useState(false)
  const [workspaceOpen, setWorkspaceOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const dropdownVariants = {
    closed: { opacity: 0, scale: 0.97, y: 4 },
    opened: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.15, ease: "easeOut" } }
  } as const

  return (
    <>
      <nav className='flex h-full flex-col px-3 py-4'>

        {/* Workspace switcher */}
        <div className='relative mb-3 px-1'>
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => setWorkspaceOpen(!workspaceOpen)}
            className='flex items-center gap-2 cursor-pointer w-full py-1'
          >
            <span className='text-xl font-bold text-white'>{activeWorkspace.name}</span>
            <motion.div animate={{ rotate: workspaceOpen ? 180 : 0 }} transition={{ duration: 0.18 }}>
              <ChevronDown className='size-4 text-neutral-500' />
            </motion.div>
          </motion.button>

          <AnimatePresence>
            {workspaceOpen && (
              <motion.div
                variants={dropdownVariants}
                initial="closed"
                animate="opened"
                exit="closed"
                className='absolute top-full mt-1 left-0 z-20 w-full bg-neutral-950 border border-neutral-800 rounded-xl shadow-xl overflow-hidden py-1'
              >
                {workspaces.map((ws) => (
                  <button
                    key={ws.id}
                    onClick={() => { setActiveWorkspace(ws); setWorkspaceOpen(false) }}
                    className={`flex items-center gap-2.5 w-full px-3 py-2 text-sm cursor-pointer transition-colors ${activeWorkspace.id === ws.id ? 'bg-neutral-800 text-white' : 'text-neutral-400 hover:bg-neutral-800/60 hover:text-white'}`}
                  >
                    <div className='size-5 rounded-md bg-neutral-700 flex items-center justify-center text-[10px] font-bold text-neutral-200 shrink-0'>
                      {ws.name.charAt(0)}
                    </div>
                    <span className='font-medium truncate'>{ws.name}</span>
                  </button>
                ))}
                <div className="my-1 h-px bg-neutral-800" />
                <button
                  onClick={() => { setWorkspaceOpen(false); setModalOpen(true) }}
                  className='flex items-center gap-2.5 w-full px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-neutral-800/60 cursor-pointer transition-colors'
                >
                  <PlusCircle className='size-4 shrink-0' />
                  <span className='font-medium'>Add a Workspace</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Divider */}
        <div className="h-px bg-neutral-800 mx-1 mb-3" />

        {/* Main nav */}
        <ul className="flex flex-col gap-0.5">
          <NavItems icon={Gauge} label="Dashboard" />
          <NavItems icon={ChartColumnIncreasing} label="Analytics" />
          <NavItems icon={Folder} label="Projects" />
          <NavItems icon={User} label="Team" />
        </ul>

        {/* Bottom section */}
        <div className="mt-auto flex flex-col gap-0.5">
          <ul className="flex flex-col gap-0.5 mb-3">
            <NavItems icon={Settings} label="Settings" />
            <NavItems icon={CircleQuestionMark} label="Get Help" />
            <NavItems icon={Search} label="Search" />
          </ul>

          <div className="h-px bg-neutral-800 mx-1 mb-3" />

          {/* Profile */}
          <div className='relative'>
            <button
              onClick={() => setProfileOpen(p => !p)}
              className="flex w-full items-center gap-3 rounded-xl px-2 py-2 hover:bg-neutral-800 cursor-pointer transition-colors"
            >
              <img
                src="assets/d835502d409557d85de9387cf3fd4065.jpg"
                className="h-8 w-8 rounded-lg object-cover shrink-0"
                alt="Profile"
              />
              <div className="flex-1 text-left leading-tight overflow-hidden">
                <p className="text-sm font-semibold text-white truncate">Yashuuu</p>
                <p className="text-xs text-neutral-500 truncate">yashu@gmail.com</p>
              </div>
              <EllipsisVertical className="size-4 text-neutral-500 shrink-0" />
            </button>

            <AnimatePresence>
              {profileOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="closed"
                  animate="opened"
                  exit="closed"
                  className='absolute bottom-full mb-2 left-0 w-full bg-neutral-950 border border-neutral-800 rounded-xl shadow-xl z-50 overflow-hidden py-1'
                >
                  <div className="flex items-center gap-3 px-3 py-2.5 border-b border-neutral-800 mb-1">
                    <img src="assets/d835502d409557d85de9387cf3fd4065.jpg" className="h-8 w-8 rounded-lg object-cover" alt="Profile" />
                    <div className="leading-tight overflow-hidden">
                      <p className="text-sm font-semibold text-white truncate">Yashuuu</p>
                      <p className="text-xs text-neutral-500 truncate">yashu@gmail.com</p>
                    </div>
                  </div>
                  <ul className="flex flex-col gap-0.5 px-1">
                    <PopInsidecontent icon={CircleUser} label="Account" />
                    <PopInsidecontent icon={ReceiptText} label="Billing" />
                    <PopInsidecontent icon={Search} label="Search" />
                  </ul>
                  <div className="my-1 h-px bg-neutral-800" />
                  <ul className="flex flex-col gap-0.5 px-1">
                    <PopInsidecontent icon={LogOut} label='Logout' />
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      {modalOpen && <CreateWorkspaceModal onClose={() => setModalOpen(false)} />}
    </>
  )
}
