import React from 'react'
import useSummary from '@/hooks/useSummary'
import SummaryCards from '@/components/dashboard/SummaryCards'
import TimelineChart from '@/components/dashboard/TimelineChart'
import AlertsSidebar from '@/components/dashboard/AlertsSidebar'
import CriticalDevices from '@/components/dashboard/CriticalDevices'
import { DUMMY_SUMMARY, DUMMY_TIMELINE, DUMMY_ALERTS, DUMMY_DEVICES } from '@/constants'

export default function Dashboard() {
  const { data } = useSummary()

  const stats = data?.stats || DUMMY_SUMMARY
  const timeline = data?.timeline || DUMMY_TIMELINE
  const alerts = data?.recent_alerts || DUMMY_ALERTS
  const devices = data?.devices || DUMMY_DEVICES

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
