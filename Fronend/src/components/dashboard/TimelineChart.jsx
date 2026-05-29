import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import PropTypes from 'prop-types'

export default function TimelineChart({ data = [] }) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
      <h3 className="font-semibold text-slate-900 mb-3">12-Month Expiry Timeline</h3>
      <div style={{ width: '100%', height: 260 }}>
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Bar dataKey="safe" stackId="a" fill="#10B981" />
            <Bar dataKey="critical" stackId="a" fill="#EF4444" />
            <Bar dataKey="expired" stackId="a" fill="#6B7280" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

TimelineChart.propTypes = { data: PropTypes.array }
