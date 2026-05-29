import React from 'react'
import PropTypes from 'prop-types'
import LoadingSkeleton from '@/components/common/LoadingSkeleton'
import { formatDate } from '@/utils/dateUtils'

const statusStyles = {
  critical: 'bg-red-100 text-red-700',
  high: 'bg-orange-100 text-orange-700',
  warning: 'bg-amber-100 text-amber-700',
  info: 'bg-blue-100 text-blue-700',
  safe: 'bg-emerald-100 text-emerald-700',
  expired: 'bg-slate-100 text-slate-700'
}

export default function DeviceTable({ devices = [], loading = false }) {
  if (loading) return <LoadingSkeleton className="h-72 rounded-3xl" />

  if (!devices || devices.length === 0) return <div className="text-slate-500">No devices found</div>

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
      <table className="min-w-full text-left">
        <thead className="bg-slate-50">
          <tr>
            {['Hostname', 'Model', 'Site', 'EOSL Date', 'Days Left', 'Status', 'Actions'].map((heading) => (
              <th key={heading} className="px-6 py-4 text-sm font-semibold tracking-wide text-slate-600">{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {devices.map((d) => (
            <tr key={d.id} className="border-t last:border-b hover:bg-slate-50 transition">
              <td className="px-6 py-4 text-slate-900 font-medium">{d.hostname}</td>
              <td className="px-6 py-4 text-slate-700">{d.model}</td>
              <td className="px-6 py-4 text-slate-700">{d.site}</td>
              <td className="px-6 py-4 text-slate-700">{formatDate(d.eosl_date)}</td>
              <td className="px-6 py-4 text-slate-700">{d.days_left}</td>
              <td className="px-6 py-4">
                <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[d.status] || 'bg-slate-100 text-slate-700'}`}>
                  {d.status}
                </span>
              </td>
              <td className="px-6 py-4">
                <button className="text-blue-600 hover:text-blue-800">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

DeviceTable.propTypes = { devices: PropTypes.array, loading: PropTypes.bool }
