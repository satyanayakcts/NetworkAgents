import { useQuery } from 'react-query'
import { fetchTimeline } from '@/services/timelineService'

/**
 * Fetch monthly timeline data for expiry chart
 * API returns {YYYY-MM: count, ...}
 */
export default function useTimeline() {
  return useQuery('timeline', () => fetchTimeline(), {
    staleTime: 1000 * 60 * 10,
    select: (data) => {
      // Convert {YYYY-MM: count} object to array for recharts
      if (data && typeof data === 'object') {
        return Object.entries(data).map(([month, count]) => ({
          month,
          count
        }))
      }
      return []
    }
  })
}
