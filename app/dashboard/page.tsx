"use client"
import React, { useEffect, useState } from 'react'
import Graphcontent from './ui/Graphcontent'
import axios from 'axios'
import { formatAmount } from './Formatcurrency'
import LoadingUi from './ui/LoadingUi'
import { AnalyticsSummary, AnalyticsTrend, ApiResponse } from '@/lib/types'

export default function page() {

  const [summary, setSummary] = useState<AnalyticsSummary | null>(null)
  const [chartdata, setChartdata] = useState<AnalyticsTrend[] | null>(null)

  useEffect(() => {
    async function load() {
      const res = await axios.get<ApiResponse<AnalyticsSummary>>(`/api/auth/analytics/summary?workspaceId=${process.env.NEXT_PUBLIC_WORKSPACE_ID}&from=2025-01-01&to=2025-01-31`)
      setSummary(res.data.data)
    }
    load()
  }, [])

  useEffect(() => {
    async function getChartData() {
      const res = await axios.get<ApiResponse<AnalyticsTrend[]>>(`/api/auth/analytics/trends?workspaceId=${process.env.NEXT_PUBLIC_WORKSPACE_ID}&from=2025-01-01&to=2025-01-31`)
      setChartdata(res.data.data)
    }
    getChartData()
  }, [])

  if (!summary) {
    return <div className='text-white font-bold '><LoadingUi /></div>
  }

  return (
    <div className="grid grid-cols-2   ">
      <Graphcontent data={chartdata} currency={true} dataKey="revenue" title='Totoal Revenue' value={summary.revenue ?? 0} />
      <Graphcontent data={chartdata} currency={false} dataKey="user_signup" title='Signup Clicks' value={summary.signupClicks} />
      <Graphcontent data={chartdata} currency={false} dataKey="page_view" title='Page View' value={summary.Pageview} />
      <Graphcontent data={chartdata} currency={false} dataKey="button_click" title='Total Events' value={summary.totalEvent} />
    </div>
  )
}
