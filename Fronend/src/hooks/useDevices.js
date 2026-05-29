import { useQuery } from 'react-query'
import { fetchDevices } from '@/services/deviceService'

/**
 * Fetch paginated devices with React Query
 * @param {object} filters
 */
export default function useDevices(filters) {
  return useQuery(['devices', filters], () => fetchDevices(filters), { staleTime: 1000 * 60 * 5 })
}
