import React, { useState } from 'react'
import DeviceFilters from '@/components/devices/DeviceFilters'
import DeviceTable from '@/components/devices/DeviceTable'
import DeviceBulkActions from '@/components/devices/DeviceBulkActions'
import useDevices from '@/hooks/useDevices'
import useFilterStore from '@/store/filterStore'
import { DUMMY_DEVICES } from '@/constants'

export default function Devices() {
  const filters = useFilterStore()
  const [selected, setSelected] = useState([])
  const { data, isLoading } = useDevices({ page: filters.page })
  const devices = data?.items || DUMMY_DEVICES

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <DeviceFilters onChange={(patch) => console.log('filters', patch)} />
        <DeviceBulkActions selected={selected} />
      </div>
      <div className="text-sm text-slate-500">Showing {devices.length} devices</div>
      <DeviceTable devices={devices} loading={isLoading} />
    </div>
  )
}
