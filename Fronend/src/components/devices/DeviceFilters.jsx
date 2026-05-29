import React from 'react'
import PropTypes from 'prop-types'

export default function DeviceFilters({ onChange }) {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-5 grid gap-4 sm:grid-cols-[1.5fr_1fr_1fr_0.8fr] items-end">
      <div>
        <label className="text-sm font-medium text-slate-600">Global search</label>
        <input
          aria-label="Search devices"
          placeholder="Hostname, model, site..."
          className="mt-2 w-full border border-slate-200 rounded-2xl px-4 py-3 focus:ring-2 focus:ring-blue-200"
          onChange={(e) => onChange?.({ search: e.target.value })}
        />
      </div>
      <div>
        <label className="text-sm font-medium text-slate-600">Severity</label>
        <select className="mt-2 w-full border border-slate-200 rounded-2xl px-4 py-3" onChange={(e) => onChange?.({ severity: e.target.value })}>
          <option value="">All severities</option>
          <option value="safe">Safe</option>
          <option value="info">Info</option>
          <option value="warning">Warning</option>
          <option value="high">High</option>
          <option value="critical">Critical</option>
          <option value="expired">Expired</option>
        </select>
      </div>
      <div>
        <label className="text-sm font-medium text-slate-600">Site</label>
        <select className="mt-2 w-full border border-slate-200 rounded-2xl px-4 py-3" onChange={(e) => onChange?.({ site: e.target.value })}>
          <option value="">All sites</option>
          <option value="HQ">HQ</option>
          <option value="Branch 1">Branch 1</option>
          <option value="Branch 2">Branch 2</option>
        </select>
      </div>
      
    </div>
  )
}

DeviceFilters.propTypes = { onChange: PropTypes.func }
