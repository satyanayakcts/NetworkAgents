import api from './api'

/**
 * Fetch paginated devices
 * @param {object} params
 */
export async function fetchDevices(params = {}) {
  try {
    const res = await api.get('/api/devices', { params })
    return res.data
  } catch (err) {
    throw err
  }
}

export async function fetchDevice(id) {
  try {
    const res = await api.get(`/api/devices/${id}`)
    return res.data
  } catch (err) {
    throw err
  }
}

export async function importDevices(formData) {
  try {
    const res = await api.post('/api/devices/import', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
    return res.data
  } catch (err) {
    throw err
  }
}

export default { fetchDevices, fetchDevice, importDevices }
