import React from 'react'
import useSummary from '@/hooks/useSummary'
import SummaryCards from '@/components/dashboard/SummaryCards'
import TimelineChart from '@/components/dashboard/TimelineChart'
import AlertsSidebar from '@/components/dashboard/AlertsSidebar'
import CriticalDevices from '@/components/dashboard/CriticalDevices'
import { STRINGS } from '@/constants'

export default function Dashboard() {
  const { data } = useSummary()

  const stats = data?.stats || {}
  const timeline = data?.timeline || []
  const alerts = data?.recent_alerts || []
  const devices = data?.devices || []

  return (
    <div className="space-y-8">
      <div className="grid gap-6">
        <SummaryCards stats={stats} />
      </div>
      <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <TimelineChart data={timeline} />
        <AlertsSidebar alerts={alerts} />
      </div>
      <div className="grid gap-6 CriticalDevices">
        <CriticalDevices devices={devices} />
      </div>
    </div>
  )
}
