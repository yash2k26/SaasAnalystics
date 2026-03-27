"use client"
import Graphcontent from './ui/Graphcontent'
import { AnalyticsSummary, AnalyticsTrend } from '@/lib/types'
import { DollarSign, UserPlus, Eye, MousePointerClick } from 'lucide-react'
import { useWorkspace } from './WorkspaceProvider'

// ── Acme Inc ─────────────────────────────────────────────────────────────────
const acmeSummary: AnalyticsSummary = { totalEvent: 18420, signupClicks: 3241, Pageview: 94830, revenue: 128450 }

const acmeRevenue: AnalyticsTrend[] = [
  { date: '2025-01-01', revenue: 2100, page_view: 0, user_signup: 0, button_click: 0 },
  { date: '2025-01-04', revenue: 2400, page_view: 0, user_signup: 0, button_click: 0 },
  { date: '2025-01-07', revenue: 2200, page_view: 0, user_signup: 0, button_click: 0 },
  { date: '2025-01-10', revenue: 8900, page_view: 0, user_signup: 0, button_click: 0 },
  { date: '2025-01-13', revenue: 11200, page_view: 0, user_signup: 0, button_click: 0 },
  { date: '2025-01-16', revenue: 7400, page_view: 0, user_signup: 0, button_click: 0 },
  { date: '2025-01-22', revenue: 9100, page_view: 0, user_signup: 0, button_click: 0 },
  { date: '2025-01-28', revenue: 14800, page_view: 0, user_signup: 0, button_click: 0 },
  { date: '2025-01-31', revenue: 15650, page_view: 0, user_signup: 0, button_click: 0 },
]
const acmeSignup: AnalyticsTrend[] = [
  { date: '2025-01-01', user_signup: 310, page_view: 0, button_click: 0, revenue: 0 },
  { date: '2025-01-04', user_signup: 420, page_view: 0, button_click: 0, revenue: 0 },
  { date: '2025-01-10', user_signup: 180, page_view: 0, button_click: 0, revenue: 0 },
  { date: '2025-01-13', user_signup: 95,  page_view: 0, button_click: 0, revenue: 0 },
  { date: '2025-01-16', user_signup: 60,  page_view: 0, button_click: 0, revenue: 0 },
  { date: '2025-01-22', user_signup: 130, page_view: 0, button_click: 0, revenue: 0 },
  { date: '2025-01-28', user_signup: 210, page_view: 0, button_click: 0, revenue: 0 },
  { date: '2025-01-31', user_signup: 188, page_view: 0, button_click: 0, revenue: 0 },
]
const acmePageview: AnalyticsTrend[] = [
  { date: '2025-01-01', page_view: 4200,  user_signup: 0, button_click: 0, revenue: 0 },
  { date: '2025-01-04', page_view: 7800,  user_signup: 0, button_click: 0, revenue: 0 },
  { date: '2025-01-07', page_view: 14500, user_signup: 0, button_click: 0, revenue: 0 },
  { date: '2025-01-13', page_view: 5400,  user_signup: 0, button_click: 0, revenue: 0 },
  { date: '2025-01-19', page_view: 11300, user_signup: 0, button_click: 0, revenue: 0 },
  { date: '2025-01-22', page_view: 16800, user_signup: 0, button_click: 0, revenue: 0 },
  { date: '2025-01-31', page_view: 9100,  user_signup: 0, button_click: 0, revenue: 0 },
]
const acmeEvents: AnalyticsTrend[] = [
  { date: '2025-01-01', button_click: 620,  page_view: 0, user_signup: 0, revenue: 0 },
  { date: '2025-01-07', button_click: 640,  page_view: 0, user_signup: 0, revenue: 0 },
  { date: '2025-01-13', button_click: 580,  page_view: 0, user_signup: 0, revenue: 0 },
  { date: '2025-01-19', button_click: 950,  page_view: 0, user_signup: 0, revenue: 0 },
  { date: '2025-01-25', button_click: 3200, page_view: 0, user_signup: 0, revenue: 0 },
  { date: '2025-01-31', button_click: 7400, page_view: 0, user_signup: 0, revenue: 0 },
]

// ── Clinic Plus ───────────────────────────────────────────────────────────────
const clinicSummary: AnalyticsSummary = { totalEvent: 5310, signupClicks: 870, Pageview: 31200, revenue: 47900 }

const clinicRevenue: AnalyticsTrend[] = [
  { date: '2025-01-01', revenue: 900,  page_view: 0, user_signup: 0, button_click: 0 },
  { date: '2025-01-05', revenue: 1400, page_view: 0, user_signup: 0, button_click: 0 },
  { date: '2025-01-09', revenue: 3100, page_view: 0, user_signup: 0, button_click: 0 },
  { date: '2025-01-13', revenue: 2700, page_view: 0, user_signup: 0, button_click: 0 },
  { date: '2025-01-17', revenue: 4800, page_view: 0, user_signup: 0, button_click: 0 },
  { date: '2025-01-21', revenue: 3900, page_view: 0, user_signup: 0, button_click: 0 },
  { date: '2025-01-25', revenue: 6200, page_view: 0, user_signup: 0, button_click: 0 },
  { date: '2025-01-31', revenue: 5800, page_view: 0, user_signup: 0, button_click: 0 },
]
const clinicSignup: AnalyticsTrend[] = [
  { date: '2025-01-01', user_signup: 55,  page_view: 0, button_click: 0, revenue: 0 },
  { date: '2025-01-06', user_signup: 90,  page_view: 0, button_click: 0, revenue: 0 },
  { date: '2025-01-11', user_signup: 130, page_view: 0, button_click: 0, revenue: 0 },
  { date: '2025-01-16', user_signup: 80,  page_view: 0, button_click: 0, revenue: 0 },
  { date: '2025-01-21', user_signup: 145, page_view: 0, button_click: 0, revenue: 0 },
  { date: '2025-01-26', user_signup: 110, page_view: 0, button_click: 0, revenue: 0 },
  { date: '2025-01-31', user_signup: 160, page_view: 0, button_click: 0, revenue: 0 },
]
const clinicPageview: AnalyticsTrend[] = [
  { date: '2025-01-01', page_view: 800,  user_signup: 0, button_click: 0, revenue: 0 },
  { date: '2025-01-06', page_view: 2100, user_signup: 0, button_click: 0, revenue: 0 },
  { date: '2025-01-11', page_view: 4800, user_signup: 0, button_click: 0, revenue: 0 },
  { date: '2025-01-16', page_view: 3200, user_signup: 0, button_click: 0, revenue: 0 },
  { date: '2025-01-21', page_view: 5900, user_signup: 0, button_click: 0, revenue: 0 },
  { date: '2025-01-26', page_view: 4400, user_signup: 0, button_click: 0, revenue: 0 },
  { date: '2025-01-31', page_view: 6100, user_signup: 0, button_click: 0, revenue: 0 },
]
const clinicEvents: AnalyticsTrend[] = [
  { date: '2025-01-01', button_click: 180, page_view: 0, user_signup: 0, revenue: 0 },
  { date: '2025-01-07', button_click: 310, page_view: 0, user_signup: 0, revenue: 0 },
  { date: '2025-01-13', button_click: 270, page_view: 0, user_signup: 0, revenue: 0 },
  { date: '2025-01-19', button_click: 420, page_view: 0, user_signup: 0, revenue: 0 },
  { date: '2025-01-25', button_click: 380, page_view: 0, user_signup: 0, revenue: 0 },
  { date: '2025-01-31', button_click: 510, page_view: 0, user_signup: 0, revenue: 0 },
]

// ── Default (new workspaces) ──────────────────────────────────────────────────
const defaultSummary: AnalyticsSummary = { totalEvent: 0, signupClicks: 0, Pageview: 0, revenue: 0 }
const emptyChart: AnalyticsTrend[] = [
  { date: '2025-01-01', revenue: 0, page_view: 0, user_signup: 0, button_click: 0 },
  { date: '2025-01-31', revenue: 0, page_view: 0, user_signup: 0, button_click: 0 },
]

const workspaceData: Record<string, {
  summary: AnalyticsSummary
  revenue: AnalyticsTrend[]
  signup: AnalyticsTrend[]
  pageview: AnalyticsTrend[]
  events: AnalyticsTrend[]
}> = {
  '1': { summary: acmeSummary,   revenue: acmeRevenue,   signup: acmeSignup,   pageview: acmePageview,   events: acmeEvents },
  '2': { summary: clinicSummary, revenue: clinicRevenue, signup: clinicSignup, pageview: clinicPageview, events: clinicEvents },
}

export default function page() {
  const { activeWorkspace } = useWorkspace()
  const data = workspaceData[activeWorkspace.id] ?? {
    summary: defaultSummary,
    revenue: emptyChart,
    signup: emptyChart,
    pageview: emptyChart,
    events: emptyChart,
  }

  return (
    <div key={activeWorkspace.id}>
      <div className="mb-2 px-3">
        <h1 className="text-xl font-semibold text-white">{activeWorkspace.name}</h1>
        <p className="text-sm text-neutral-500 mt-0.5">January 2025</p>
      </div>

      <div className="grid grid-cols-2">
        <Graphcontent data={data.revenue}  currency={true}  dataKey="revenue"       title='Total Revenue'  value={data.summary.revenue ?? 0}       icon={DollarSign}       gradientId="grad-revenue"  />
        <Graphcontent data={data.signup}   currency={false} dataKey="user_signup"   title='Signup Clicks'  value={data.summary.signupClicks}        icon={UserPlus}         gradientId="grad-signup"   />
      </div>

      <div className="flex items-center gap-3 px-3 my-1">
        <p className="text-xs font-semibold text-neutral-600 uppercase tracking-widest whitespace-nowrap">Engagement</p>
        <div className="flex-1 h-px bg-neutral-800" />
      </div>

      <div className="grid grid-cols-2">
        <Graphcontent data={data.pageview} currency={false} dataKey="page_view"     title='Page Views'     value={data.summary.Pageview}            icon={Eye}              gradientId="grad-pageview" />
        <Graphcontent data={data.events}   currency={false} dataKey="button_click"  title='Total Events'   value={data.summary.totalEvent}          icon={MousePointerClick} gradientId="grad-events"  />
      </div>
    </div>
  )
}
