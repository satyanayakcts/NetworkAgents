import { useCallback } from 'react'

/**
 * Lightweight notification helper (placeholder for toast lib)
 * @returns {{notify: function(string):void}}
 */
export default function useNotifications() {
  const notify = useCallback((msg) => {
    // simple alert for now; replace with accessible toast component
    try { window.alert(msg) } catch (e) { console.log(msg) }
  }, [])

  return { notify }
}
