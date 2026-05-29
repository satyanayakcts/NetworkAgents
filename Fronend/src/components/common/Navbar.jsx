import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { STRINGS } from '@/constants'

export default function Navbar() {
  return (
    <header className="bg-slate-950 border-b border-slate-800 px-6 backdrop-blur-sm sticky top-0 z-20 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 h-16">
        {/* Brand/Title Section */}
        <div className="flex items-center gap-2">
          {/* Blue Shield Icon representation from reference */}
          <div className="text-blue-500 mr-1">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold tracking-tight">{STRINGS.APP_TITLE || 'EBMS Control Hub'}</h1>
        </div>

        {/* Navigation Links moved from Sidebar - Added ml-auto to align links to the right end */}
        <nav className="flex items-center h-full space-x-1 ml-auto">
          <NavLink 
            to="/dashboard" 
            className={({isActive}) => 
              `px-4 h-16 flex items-center text-sm font-medium transition-colors border-b-2 ${
                isActive 
                  ? 'border-blue-500 text-blue-400 bg-slate-900/50' 
                  : 'border-transparent text-slate-300 hover:text-white hover:bg-slate-900/30'
              }`
            }
          >
            Dashboard
          </NavLink>
          
          <NavLink 
            to="/devices" 
            className={({isActive}) => 
              `px-4 h-16 flex items-center text-sm font-medium transition-colors border-b-2 ${
                isActive 
                  ? 'border-blue-500 text-blue-400 bg-slate-900/50' 
                  : 'border-transparent text-slate-300 hover:text-white hover:bg-slate-900/30'
              }`
            }
          >
            Devices
          </NavLink>
          
          <NavLink 
            to="/alerts" 
            className={({isActive}) => 
              `px-4 h-16 flex items-center text-sm font-medium transition-colors border-b-2 ${
                isActive 
                  ? 'border-blue-500 text-blue-400 bg-slate-900/50' 
                  : 'border-transparent text-slate-300 hover:text-white hover:bg-slate-900/30'
              }`
            }
          >
            Alerts Console
          </NavLink>
        </nav>

        {/* Right side alignment placeholder */}
        <div className="flex items-center gap-3">
          {/* Elements on the far right can go here */}
        </div>
      </div>
    </header>
  )
}

Navbar.propTypes = {}