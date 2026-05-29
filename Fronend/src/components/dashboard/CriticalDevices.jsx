import React from 'react'
import PropTypes from 'prop-types'
import { formatDate } from '@/utils/dateUtils'

export default function CriticalDevices({ devices = [] }) {
  return (
    <div className="bg-white shadow rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold">Critical Device Preview</h3>
          <p className="text-sm text-gray-500">Latest at-risk devices and expiry timeline.</p>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {devices.slice(0, 4).map((device) => (
          <div key={device.id} className="border p-4 rounded-lg hover:shadow-md transition">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">{device.hostname}</span>
              <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getStatusColor(device.status)}`}>{device.status}</span>
            </div>
            <div className="text-sm text-gray-500">{device.model}</div>
            <div className="mt-3 text-sm text-gray-600">
              <div>EOSL: {formatDate(device.eosl_date)}</div>
              <div>Days left: <span className="font-semibold">{device.days_left}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function getStatusColor(status) {
  switch (status) {
    case 'critical':
      return 'bg-red-100 text-red-700'
    case 'high':
      return 'bg-orange-100 text-orange-700'
    case 'warning':
      return 'bg-amber-100 text-amber-700'
    case 'info':
      return 'bg-blue-100 text-blue-700'
    default:
      return 'bg-gray-100 text-gray-700'
  }
}

CriticalDevices.propTypes = {
  devices: PropTypes.array
}
