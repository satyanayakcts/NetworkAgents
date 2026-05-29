import React, { useState } from 'react'
import api from '@/services/api'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    try {
      const res = await api.post('/api/auth/login', { email, password })
      localStorage.setItem('access_token', res.data.access_token)
      localStorage.setItem('refresh_token', res.data.refresh_token)
      window.location.href = '/dashboard'
    } catch (err) {
      alert('Login failed')
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Sign in</h2>
      <form onSubmit={onSubmit} className="space-y-3">
        <input required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="w-full border p-2 rounded" />
        <input required type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="w-full border p-2 rounded" />
        <button className="w-full bg-blue-600 text-white p-2 rounded">Sign in</button>
      </form>
    </div>
  )
}
