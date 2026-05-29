import React from 'react'
import PropTypes from 'prop-types'

const severityStyle = {
  critical: 'bg-red-50 text-red-700 border-red-100',
  high: 'bg-orange-50 text-orange-700 border-orange-100',
  warning: 'bg-amber-50 text-amber-700 border-amber-100',
  info: 'bg-blue-50 text-blue-700 border-blue-100'
}

export default function AlertsSidebar({ alerts = [] }) {
  return (
    <aside className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-lg font-semibold text-slate-900">Recent Alerts</h4>
        <span className="text-sm text-slate-500">Top 3 critical</span>
      </div>
      <ul className="space-y-3">
        {alerts.slice(0, 3).map((a) => (
          <li key={a.id} className={`border ${severityStyle[a.severity] || 'bg-slate-50 text-slate-700 border-slate-200'} rounded-3xl p-4`}>
            <div className="flex items-center justify-between gap-3 mb-2">
              <span className="font-semibold text-slate-900">{a.title}</span>
              <span className="text-xs uppercase tracking-wide text-slate-500">{a.severity}</span>
            </div>
            <p className="text-sm text-slate-600">{a.message}</p>
          </li>
        ))}
        {alerts.length === 0 && <li className="text-sm text-slate-500">No alerts</li>}
      </ul>
    </aside>
  )
}

AlertsSidebar.propTypes = { alerts: PropTypes.array }
