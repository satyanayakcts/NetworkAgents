import { useQuery } from 'react-query'
import { fetchDevices } from '@/services/deviceService'

/**
 * Fetch devices with React Query
 * API returns {total, devices: [...]}
 * @param {object} filters
 */
export default function useDevices(filters) {
  return useQuery(['devices', filters], () => fetchDevices(filters), {
    staleTime: 1000 * 60 * 5,
    select: (data) => {
      // Extract devices array from API response
      if (data && Array.isArray(data.devices)) {
        return { ...data, items: data.devices }
      }
      return data
    }
  })
}
