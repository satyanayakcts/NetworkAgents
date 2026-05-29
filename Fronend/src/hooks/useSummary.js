import { useQuery } from 'react-query'
import api from '@/services/api'

export default function useSummary() {
  return useQuery('summary', async () => {
    const res = await api.get('/api/summary')
    return res.data
  }, { refetchInterval: 1000 * 60 * 10 })
}
