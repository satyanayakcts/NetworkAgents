import { useQuery, useQueryClient } from 'react-query'
import { fetchAlerts } from '@/services/alertService'

export default function useAlerts(params = {}) {
  const qc = useQueryClient()
  return useQuery(['alerts', params], () => fetchAlerts(params), {
    initialData: [],
    select: (data) => {
      // API returns {total, alerts: [...]}
      if (Array.isArray(data)) return data
      if (data && Array.isArray(data.alerts)) return data.alerts
      return []
    }
  })
}
