import React from 'react'
import PropTypes from 'prop-types'

export default function AlertToast({ message }) {
  if (!message) return null
  return (
    <div role="status" className="fixed bottom-4 right-4 bg-white shadow rounded p-3">
      {message}
    </div>
  )
}

AlertToast.propTypes = { message: PropTypes.string }
