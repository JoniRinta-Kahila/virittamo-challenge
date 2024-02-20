import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import classNames from 'classnames';
import { DeviceDocument } from '../types';
import apiUtils from '../apiUtils';

const DevicesList: React.FC = () => {
  const [devices, setDevices] = React.useState<DeviceDocument[]>([]);
  const [page, setPage] = React.useState<number | null>(1);
  const { getDevicesByPage, deleteDeviceById } = apiUtils;

  const fetchNextDevices = () => {
    if (!page) return;
    getDevicesByPage(page)
      .then((data) => {
        setPage(data.next);
        setDevices([...devices, ...data.results]);
      });
  }

  const removeDevice = (id: string) => {
    deleteDeviceById(id)
      .then(() => {
        setDevices(devices.filter((device) => device._id !== id));
      });
  }

  // Fetch next devices at the first render
  useEffect(() => {
    fetchNextDevices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
                  DEVICE STATUS HERE
                </p>
              </div>
              <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                <p className="whitespace-nowrap">
                  Available at xxxx
                </p>
                <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <p className="truncate">asdasd</p>
              </div>
            </div>
            <div className="flex flex-none items-center gap-x-4">
              <Link
                to={`/devices/${device._id}`}
                className="hidden rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:block"
              >
                View details<span className="sr-only"> Device details</span>
              </Link>
              <Menu as="div" className="relative flex-none">
                <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to={`/issuance/${device._id}`}
                          className={classNames(
                            active ? 'bg-gray-50' : '',
                            'block px-3 py-1 text-sm leading-6 text-gray-900'
                          )}
                        >
                          Issuance<span className="sr-only">, {device.name}</span>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to={`/devices/device?id=${device._id}`}
                          className={classNames(
                            active ? 'bg-gray-50' : '',
                            'block px-3 py-1 text-sm leading-6 text-gray-900'
                          )}
                        >
                          Edit<span className="sr-only">, {device.name}</span>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => removeDevice(device._id)}
                          className={classNames(
                            active ? 'bg-gray-50' : '',
                            'block px-3 py-1 text-sm leading-6 text-gray-900'
                          )}
                        >
                          Delete<span className="sr-only">, {device.name}</span>
                        </button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </li>
        ))}
      </ul>
      {page && <button onClick={fetchNextDevices} className="mt-4 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Load more</button>}
    </div>
  )
}

export default DevicesList
