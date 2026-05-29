import axios from 'axios'

/**
 * Create configured axios instance with JWT interceptor and retry logic
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
  headers: { 'Content-Type': 'application/json' },
  timeout: 15000
})

let isRefreshing = false

api.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem('access_token')
    if (token) config.headers.Authorization = `Bearer ${token}`
  } catch (e) {}
  return config
})

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const original = err.config
    if (err.response && err.response.status === 401 && !original._retry) {
      original._retry = true
      // attempt refresh
      try {
        if (!isRefreshing) {
          isRefreshing = true
          const refreshToken = localStorage.getItem('refresh_token')
          const resp = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/auth/refresh`, { token: refreshToken })
          localStorage.setItem('access_token', resp.data.access_token)
          isRefreshing = false
        }
        original.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`
        return api(original)
      } catch (e) {
        // redirect to login
        window.location.href = '/login'
        return Promise.reject(e)
      }
    }

    // simple retry logic for other network errors
    original._retryCount = original._retryCount || 0
    if (original._retryCount < 2) {
      original._retryCount += 1
      return api(original)
    }

    return Promise.reject(err)
  }
)

export default api
