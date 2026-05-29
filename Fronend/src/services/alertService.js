import api from './api'

export async function fetchAlerts(params = {}) {
  try {
    const res = await api.get('/api/v1/eol/alerts', { params })
    return res.data
  } catch (err) {
    throw err
  }
}

export async function ackAlert(id) {
  try {
    const res = await api.put(`/api/v1/eol/alerts/${id}/ack`)
    return res.data
  } catch (err) {
    throw err
  }
}

export default { fetchAlerts, ackAlert }
