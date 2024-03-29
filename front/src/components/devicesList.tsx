import React, { useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { DeviceDocument } from '../types';
import apiUtils from '../apiUtils';
import DeviceContextMenu from './deviceContextMenu';

const DevicesList: React.FC = () => {
  const [devices, setDevices] = React.useState<DeviceDocument[]>([]);
  const [page, setPage] = React.useState<number | null>(1);
  const { getDevicesByPage, deleteDeviceById } = apiUtils;

  const fetchNextDevices =  useCallback(() => {
    if (!page) return;
    getDevicesByPage(page)
      .then((data) => {
        setPage(data.next);
        setDevices([...devices, ...data.results]);
      });
  }, [page, devices, getDevicesByPage])

  const removeDevice = (id: string) => {
    deleteDeviceById(id)
      .then(() => {
        setDevices(devices.filter((device) => device._id !== id));
      });
  }

  // Fetch next devices at the first render
  useEffect(() => {
    fetchNextDevices();
  }, [fetchNextDevices])

  return (
    <div>
      <ul role="list" className="divide-y divide-gray-100">
        {devices.map((device) => (
          <li key={device._id} className="flex items-center justify-between gap-x-6 py-5">
            <div className="min-w-0">
              <div className="flex items-start gap-x-3">
                <p className="text-sm font-semibold leading-6 text-gray-900">{device.name}</p>
                <p
                  className="rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset"
                >
                  STATUS
                </p>
              </div>
              <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                <p className="whitespace-nowrap">
                  Available at xxxx
                </p>
                <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <p className="truncate">{device.deviceNumber}</p>
              </div>
            </div>
            <div className="flex flex-none items-center gap-x-4">
              <Link
                to={`/devices/${device._id}`}
                className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
              >
                View details<span className="sr-only"> Device details</span>
              </Link>
              <DeviceContextMenu deviceDoc={device} removeDeviceFn={removeDevice} />
            </div>
          </li>
        ))}
      </ul>
      {page && <button onClick={fetchNextDevices} className="mt-4 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Load more</button>}
    </div>
  )
}

export default DevicesList
