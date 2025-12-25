import React from 'react'
import RevenueChart from './RevenueChart'

const Graphcontent = ({title , value}:{
        title : string
        value : string
    }) => {
  return (
    <div className='rounded-2xl bg-neutral-900 m-4 border border-neutral-700 p-5 items-center '>
      <p className='text-white/55 text-sm  '>{title} </p>
      <p className='text-white text-3xl font-bold'>{value}</p>
      <RevenueChart/>
    </div>
  )
}

export default Graphcontent
