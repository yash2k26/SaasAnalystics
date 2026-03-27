"use client"
import { createContext, useContext, useState } from 'react'

export type Workspace = {
  id: string
  name: string
  description?: string
}

type WorkspaceContextState = {
  workspaces: Workspace[]
  activeWorkspace: Workspace
  setActiveWorkspace: (ws: Workspace) => void
  addWorkspace: (ws: Workspace) => void
}

const WorkspaceContext = createContext<WorkspaceContextState | undefined>(undefined)

const defaultWorkspaces: Workspace[] = [
  { id: '1', name: 'Acme Inc',    description: 'Main analytics workspace' },
  { id: '2', name: 'Clinic Plus', description: 'Healthcare analytics' },
]

export function WorkspaceProvider({ children }: { children: React.ReactNode }) {
  const [workspaces, setWorkspaces] = useState<Workspace[]>(defaultWorkspaces)
  const [activeWorkspace, setActiveWorkspace] = useState<Workspace>(defaultWorkspaces[0])

  function addWorkspace(ws: Workspace) {
    setWorkspaces(prev => [...prev, ws])
    setActiveWorkspace(ws)
  }

  return (
    <WorkspaceContext.Provider value={{ workspaces, activeWorkspace, setActiveWorkspace, addWorkspace }}>
      {children}
    </WorkspaceContext.Provider>
  )
}

export const useWorkspace = () => {
  const ctx = useContext(WorkspaceContext)
  if (!ctx) throw new Error('useWorkspace must be used inside WorkspaceProvider')
  return ctx
}
