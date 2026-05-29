import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Devices from './pages/Devices'
import Alerts from './pages/Alerts'
import Login from './pages/Login'
import Navbar from './components/common/Navbar'
import ErrorBoundary from './components/common/ErrorBoundary'

/**
 * App root with layout and routes
 */
export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-slate-100">
        {/* Changed 'flex flex-col md:pl-64' to 'flex flex-col' to eliminate the empty sidebar container space */}
        <div className="flex flex-col">
          <Navbar />
          <main className="p-6 w-full max-w-7xl mx-auto">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/devices" element={<Devices />} />
              <Route path="/alerts" element={<Alerts />} />
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </ErrorBoundary>
  )
}