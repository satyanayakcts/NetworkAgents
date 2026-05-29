import React from 'react'
import PropTypes from 'prop-types'
import exportToCSV from '@/utils/csvExporter'

export default function DeviceBulkActions({ selected = [] }) {
  const onExport = () => exportToCSV(selected, 'devices.csv')

  return (
    <div className="flex gap-2">
      
    </div>
  )
}

DeviceBulkActions.propTypes = { selected: PropTypes.array }
