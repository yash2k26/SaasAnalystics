import React from 'react'
import Sidebar from './ui/Sidebar'
import Topbar from './ui/Topbar'

export default function page({children}:{children : React.ReactNode}) {
  return (
    <div className='grid min-h-screen grid-cols-[235px_1fr] grid-rows-[64px_1fr] bg-black text-white '>
      <aside className='row-span-2 border-r border-white/10 bg-neutral-900 '>
        <Sidebar/>
      </aside>
      <header className='border-b border-white/10'>
          <Topbar/>
      </header>
      <main className='overflow-y-auto p-6 '>
          {children}
      </main>

    </div>
  )
}
