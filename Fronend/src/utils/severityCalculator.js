/**
 * Calculate severity based on days left until EOSL
 * @param {number} daysLeft
 * @returns {string} one of safe|info|warning|high|critical|expired
 */
export function severityFromDays(daysLeft) {
  if (daysLeft <= 0) return 'expired'
  if (daysLeft <= 30) return 'critical'
  if (daysLeft <= 90) return 'high'
  if (daysLeft <= 180) return 'warning'
  if (daysLeft <= 365) return 'info'
  return 'safe'
}

export default severityFromDays
