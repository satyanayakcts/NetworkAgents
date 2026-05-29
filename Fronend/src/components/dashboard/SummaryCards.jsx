import React from 'react'
import PropTypes from 'prop-types'

// Enhanced configuration mapping labels, hints, text colors, background colors, and unique SVG icons
const severityConfig = {
  safe: { 
    label: 'Safe', 
    hint: '>12 mo', 
    color: 'text-severity-safe',
    bgColor: 'bg-emerald-500/10',
    icon: (className) => (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  info: { 
    label: 'Info', 
    hint: '6-12 mo', 
    color: 'text-severity-info',
    bgColor: 'bg-blue-500/10',
    icon: (className) => (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  warning: { 
    label: 'Warning', 
    hint: '3-6 mo', 
    color: 'text-severity-warning',
    bgColor: 'bg-amber-500/10',
    icon: (className) => (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    )
  },
  high: { 
    label: 'High', 
    hint: '1-3 mo', 
    color: 'text-severity-high',
    bgColor: 'bg-orange-500/10',
    icon: (className) => (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  critical: { 
    label: 'Critical', 
    hint: '<1 mo', 
    color: 'text-severity-critical',
    bgColor: 'bg-red-500/10',
    icon: (className) => (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m0-8v4m9-2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  expired: { 
    label: 'Expired', 
    hint: '0 mo', 
    color: 'text-severity-expired',
    bgColor: 'bg-slate-500/10',
    icon: (className) => (
      <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    )
  }
}

export default function SummaryCards({ stats = {} }) {
  return (
    /* Changed xl:grid-cols-6 to lg:grid-cols-3 to force a clean 3-column layout on large screens */
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {Object.entries(severityConfig).map(([key, config]) => (
        <div key={key} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200/80 transition-all duration-200 flex flex-col justify-between group">
          <div>
            <div className="flex items-start justify-between mb-4">
              <div>
                {/* Increased size from text-base to text-lg for the main label */}
                <p className={`text-lg font-bold tracking-tight ${config.color}`}>{config.label}</p>
                {/* Increased size from text-xs to text-sm for the hint text */}
                {config.hint && <p className="text-sm text-slate-400 font-medium mt-0.5">{config.hint}</p>}
              </div>
              {/* Soft tint indicator badge block containing stylized layout icons */}
              <div className={`p-2.5 rounded-xl ${config.bgColor} ${config.color} transition-transform duration-200 group-hover:scale-110`}>
                {config.icon("w-5 h-5")}
              </div>
            </div>
          </div>
          <div className="flex items-baseline justify-between mt-2">
            <p className={`text-4xl font-extrabold tracking-tight ${config.color}`}>{stats[key] ?? 0}</p>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200">View Details</span>
          </div>
        </div>
      ))}
    </div>
  )
}

SummaryCards.propTypes = { stats: PropTypes.object }