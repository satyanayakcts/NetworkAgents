import create from 'zustand'
import { persist } from 'zustand/middleware'

/**
 * Zustand store for filters and pagination
 */
export const useFilterStore = create(
  persist(
    (set) => ({
      search: '',
      severity: null,
      site: null,
      model: null,
      sortBy: 'hostname',
      sortDir: 'asc',
      page: 1,
      setSearch: (v) => set({ search: v }),
      setSeverity: (v) => set({ severity: v }),
      setSite: (v) => set({ site: v }),
      setModel: (v) => set({ model: v }),
      setSort: (sortBy, sortDir) => set({ sortBy, sortDir }),
      setPage: (p) => set({ page: p }),
      resetFilters: () => set({ search: '', severity: null, site: null, model: null, sortBy: 'hostname', sortDir: 'asc', page: 1 })
    }),
    { name: 'filter-store' }
  )
)

export default useFilterStore
