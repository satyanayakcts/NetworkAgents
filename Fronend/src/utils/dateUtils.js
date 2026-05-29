/**
 * Utilities for date formatting and days calculation
 */
export function daysBetween(dateString) {
  const now = new Date()
  const target = new Date(dateString)
  const diff = target.getTime() - now.getTime()
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}

export function formatDate(dateString) {
  if (!dateString) return ''
  const d = new Date(dateString)
  return d.toISOString().slice(0, 10)
}

export default { daysBetween, formatDate }
