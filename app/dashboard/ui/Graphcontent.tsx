import React from 'react'
import RevenueChart from './RevenueChart'
import NumberAnimation from './Odometeranimation'
// import { RollingNumber } from './Odometeranimation'

const Graphcontent = ({
  title,
  value,
  data,
  dataKey,
  currency
}: {
  title: string
  value: number
  data: any[] | null
  dataKey: string
  currency: boolean
}) => {
  return (
    <div className='rounded-2xl bg-neutral-900 m-4 border border-neutral-700 p-5 items-center '>
      <p className='text-white/55 text-sm  '>{title} </p>
      <div className='text-white text-3xl font-bold mt-2'><NumberAnimation currency={currency} value={value} /></div>
      <RevenueChart data={data} datakey={dataKey} />
    </div>
  )
}

export default Graphcontent
