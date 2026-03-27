"use client"
import React from 'react'
import RevenueChart from './RevenueChart'
import NumberAnimation from './Odometeranimation'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { useTheme } from '../ThemeProvider'

const Graphcontent = ({
  title,
  value,
  data,
  dataKey,
  currency,
  icon: Icon,
  gradientId,
}: {
  title: string
  value: number
  data: any[] | null
  dataKey: string
  currency: boolean
  icon: React.ElementType
  gradientId: string
}) => {
  const { theme } = useTheme()

  const first = data?.[0]?.[dataKey] ?? 0
  const last = data?.[data.length - 1]?.[dataKey] ?? 0
  const trendPct = first === 0 ? 0 : ((last - first) / first) * 100
  const isUp = trendPct >= 0

  return (
    <div className='rounded-2xl bg-neutral-900 m-3 border border-neutral-800 p-5 flex flex-col gap-3 hover:border-neutral-700 transition-colors duration-200'>
      <div className='flex items-center justify-between'>
        <p className='text-neutral-400 text-sm font-medium'>{title}</p>
        <div className='p-2 rounded-lg bg-neutral-800' style={{ color: theme.hex }}>
          <Icon className='size-4' />
        </div>
      </div>

      <div className='flex items-end justify-between'>
        <div className='text-white text-3xl font-bold tracking-tight'>
          <NumberAnimation currency={currency} value={value} />
        </div>
        <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${isUp ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
          {isUp ? <TrendingUp className='size-3' /> : <TrendingDown className='size-3' />}
          {Math.abs(trendPct).toFixed(1)}%
        </div>
      </div>

      <RevenueChart key={theme.hex} data={data} datakey={dataKey} gradientId={gradientId} currency={currency} />
    </div>
  )
}

export default Graphcontent
