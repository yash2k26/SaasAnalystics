"use client"
import { X, Building2, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useTheme } from '../ThemeProvider'
import { useWorkspace } from '../WorkspaceProvider'

export default function CreateWorkspaceModal({ onClose }: { onClose: () => void }) {
  const { theme } = useTheme()
  const { addWorkspace } = useWorkspace()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const initials = name.trim().slice(0, 2).toUpperCase() || '?'

  function handleCreate() {
    if (!name.trim()) return
    addWorkspace({ id: Date.now().toString(), name: name.trim(), description: description.trim() })
    onClose()
  }

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className='fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center'
      >
        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 12 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className='w-full max-w-md bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden'
        >
          {/* Header */}
          <div className='flex items-center justify-between px-6 py-5 border-b border-neutral-800'>
            <div className='flex items-center gap-3'>
              <div className='p-2 rounded-lg bg-neutral-800' style={{ color: theme.hex }}>
                <Building2 className='size-4' />
              </div>
              <div>
                <h2 className='text-white font-semibold text-base'>New Workspace</h2>
                <p className='text-neutral-500 text-xs mt-0.5'>Set up a new analytics workspace</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className='p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer'
            >
              <X className='size-4' />
            </button>
          </div>

          {/* Body */}
          <div className='px-6 py-5 flex flex-col gap-5'>

            {/* Preview */}
            <div className='flex items-center gap-4 p-4 rounded-xl bg-neutral-800/50 border border-neutral-800'>
              <div
                className='size-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shrink-0'
                style={{ backgroundColor: `${theme.hex}30`, border: `1px solid ${theme.hex}50`, color: theme.hex }}
              >
                {initials}
              </div>
              <div>
                <p className='text-white font-medium text-sm'>{name || 'Workspace name'}</p>
                <p className='text-neutral-500 text-xs mt-0.5'>{description || 'No description'}</p>
              </div>
            </div>

            {/* Name field */}
            <div className='flex flex-col gap-1.5'>
              <label className='text-sm text-neutral-400 font-medium'>Workspace name <span style={{ color: theme.hex }}>*</span></label>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='e.g. Acme Inc'
                className='w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-neutral-500 outline-none transition-colors'
                style={{ '--tw-ring-color': theme } as any}
                onFocus={(e) => e.currentTarget.style.borderColor = `${theme.hex}80`}
                onBlur={(e) => e.currentTarget.style.borderColor = ''}
                maxLength={40}
              />
            </div>

            {/* Description field */}
            <div className='flex flex-col gap-1.5'>
              <label className='text-sm text-neutral-400 font-medium'>Description <span className='text-neutral-600 font-normal'>(optional)</span></label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='What is this workspace for?'
                rows={2}
                className='w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2.5 text-sm text-white placeholder-neutral-500 outline-none resize-none transition-colors'
                onFocus={(e) => e.currentTarget.style.borderColor = `${theme.hex}80`}
                onBlur={(e) => e.currentTarget.style.borderColor = ''}
                maxLength={120}
              />
            </div>
          </div>

          {/* Footer */}
          <div className='flex items-center justify-end gap-3 px-6 py-4 border-t border-neutral-800'>
            <button
              onClick={onClose}
              className='px-4 py-2 text-sm text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer'
            >
              Cancel
            </button>
            <button
              onClick={handleCreate}
              disabled={!name.trim()}
              className='flex items-center gap-2 px-4 py-2 text-sm font-medium text-white rounded-lg transition-opacity cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed'
              style={{ backgroundColor: theme.hex }}
            >
              Create Workspace <ArrowRight className='size-3.5' />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
