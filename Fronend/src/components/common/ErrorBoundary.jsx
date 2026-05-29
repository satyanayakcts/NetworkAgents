import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught', error, info)
  }

  render() {
    if (this.state.error) {
      return (
        <div role="alert" className="p-6">
          <h2 className="text-xl font-bold">Something went wrong</h2>
          <p className="mt-2 text-gray-600">Please refresh the page or contact support.</p>
        </div>
      )
    }
    return this.props.children
  }
}
