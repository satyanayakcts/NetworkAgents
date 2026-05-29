import api from './api'

/**
 * Fetch devices with optional filters
 * @param {object} params - site_location, model, customer_id, severity
 */
export async function fetchDevices(params = {}) {
  try {
    const res = await api.get('/api/v1/eol/devices', { params })
    return res.data
  } catch (err) {
    throw err
  }
}

/**
 * Fetch all unique site locations for dropdowns
 */
export async function fetchSites() {
  try {
    const res = await api.get('/api/v1/eol/sites')
    return res.data
  } catch (err) {
    throw err
  }
}

/**
 * Fetch all unique normalized models for dropdowns
 */
export async function fetchModels() {
  try {
    const res = await api.get('/api/v1/eol/models')
    return res.data
  } catch (err) {
    throw err
  }
}

export default { fetchDevices, fetchSites, fetchModels }
