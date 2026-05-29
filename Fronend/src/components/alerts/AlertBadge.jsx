import React from 'react'
import PropTypes from 'prop-types'

export default function AlertBadge({ severity }) {
  const colorMap = {
    critical: 'bg-red-500',
    high: 'bg-orange-400',
    warning: 'bg-yellow-400',
    info: 'bg-blue-400'
  }
  return <span className={`px-2 py-1 text-white rounded ${colorMap[severity] || 'bg-gray-400'}`}>{severity}</span>
}

AlertBadge.propTypes = { severity: PropTypes.string }
