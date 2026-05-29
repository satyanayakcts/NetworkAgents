import { useEffect } from 'react'
import { io } from 'socket.io-client'
import { useQueryClient } from 'react-query'

/**
 * Connect to socket.io server and invalidate queries on events
 */
export default function useSocket() {
  const qc = useQueryClient()

  useEffect(() => {
    const url = import.meta.env.VITE_SOCKET_URL
    if (!url) return
    const socket = io(url, { autoConnect: true })

    socket.on('connect', () => {
      console.debug('socket connected')
    })

    socket.on('new_alert', (payload) => {
      qc.invalidateQueries('alerts')
      // optionally show toast
      qc.setQueryData(['latest_alert'], payload)
    })

    socket.on('device_updated', () => qc.invalidateQueries('devices'))

    return () => socket.disconnect()
  }, [qc])
}
