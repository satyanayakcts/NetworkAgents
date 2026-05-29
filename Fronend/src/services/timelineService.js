import api from './api'

/**
 * Fetch monthly timeline data for expiry chart
 * @returns {object} Monthly expiry counts {YYYY-MM: count, ...}
 */
export async function fetchTimeline() {
  try {
    const res = await api.get('/api/v1/eol/timeline')
    return res.data
  } catch (err) {
    throw err
  }
}

export default { fetchTimeline }
