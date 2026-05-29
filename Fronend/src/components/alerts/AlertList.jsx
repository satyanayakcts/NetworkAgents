import React from 'react'
import PropTypes from 'prop-types'
import LoadingSkeleton from '@/components/common/LoadingSkeleton'

export default function AlertList({ alerts = [], onAck, loading = false }) {
  if (loading) {
    return <LoadingSkeleton className="h-40 rounded-3xl" />
  }

  if (!Array.isArray(alerts) || alerts.length === 0) {
    return <div className="text-slate-500">No alerts</div>
  }

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-5">
      <ul className="space-y-4">
        {alerts.map((a) => (
          <li key={a.id} className="border border-slate-200 rounded-3xl p-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="font-semibold text-slate-900">{a.title}</div>
              <div className="text-sm text-slate-500">{a.message}</div>
            </div>
            <button onClick={() => onAck?.(a.id)} className="rounded-full px-4 py-2 bg-green-600 text-white hover:bg-green-700 transition">
              Acknowledge
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

AlertList.propTypes = { alerts: PropTypes.oneOfType([PropTypes.array, PropTypes.object]), onAck: PropTypes.func, loading: PropTypes.bool }
