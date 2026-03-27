"use client"
import { PlusCircle } from 'lucide-react'
import { useState } from 'react'
import Customselector from './Customselector'
import { useTheme } from '../ThemeProvider'
import CreateWorkspaceModal from './CreateWorkspaceModal'

export default function Topbar() {
  const { theme } = useTheme()
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className='flex justify-between items-center px-6 h-full'>
        <Customselector />
        <button
          onClick={() => setModalOpen(true)}
          className='flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border cursor-pointer transition-all hover:opacity-90 active:scale-95'
          style={{ borderColor: `${theme.hex}60`, color: theme.hex, background: `${theme.hex}12` }}
        >
          <PlusCircle className='size-4' />
          Create New
        </button>
      </div>

      {modalOpen && <CreateWorkspaceModal onClose={() => setModalOpen(false)} />}
    </>
  )
}
