import React from 'react'
import useAlerts from '@/hooks/useAlerts'
import AlertList from '@/components/alerts/AlertList'
import useSocket from '@/hooks/useSocket'

export default function Alerts() {
  useSocket()
  const { data, isError, error, isLoading } = useAlerts()
  const alerts = Array.isArray(data) ? data : []

  if (isError) {
    return (
      <div className="p-6 bg-white rounded-3xl shadow-sm border border-red-100 text-red-700">
        <h2 className="text-xl font-semibold">Unable to load alerts</h2>
        <p className="mt-2 text-sm">{error?.message || 'Please try again later.'}</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Alerts</h2>
          <p className="text-sm text-slate-500">Realtime alert feed and acknowledgment queue.</p>
        </div>
        <button className="rounded-full px-4 py-2 bg-slate-900 text-white hover:bg-slate-800 transition">Refresh</button>
      </div>
      <AlertList alerts={alerts} onAck={(id) => console.log('ack', id)} loading={isLoading} />
    </div>
  )
}
