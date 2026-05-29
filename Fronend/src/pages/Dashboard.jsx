import React from 'react'
import useSummary from '@/hooks/useSummary'
import useTimeline from '@/hooks/useTimeline'
import useAlerts from '@/hooks/useAlerts'
import useDevices from '@/hooks/useDevices'
import SummaryCards from '@/components/dashboard/SummaryCards'
import TimelineChart from '@/components/dashboard/TimelineChart'
import AlertsSidebar from '@/components/dashboard/AlertsSidebar'
import CriticalDevices from '@/components/dashboard/CriticalDevices'
import { STRINGS } from '@/constants'

export default function Dashboard() {
  const { data: stats } = useSummary()
  const { data: timeline } = useTimeline()
  const { data: alerts } = useAlerts()
  const { data: devicesData } = useDevices({})
  const devices = devicesData?.items || devicesData?.devices || []

  return (
    <div className="space-y-8">
      <div className="grid gap-6">
        <SummaryCards stats={stats || {}} />
      </div>
      <div className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <TimelineChart data={timeline || []} />
        <AlertsSidebar alerts={alerts || []} />
      </div>
      <div className="grid gap-6 CriticalDevices">
        <CriticalDevices devices={devices} />
      </div>
    </div>
  )
}
