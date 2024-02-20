import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiUtils from '../apiUtils';
import { DeviceDocument } from '../types';

const DeviceInfo: React.FC = () => {
  const { deviceId } = useParams();
  const [device, setDevice] = useState<DeviceDocument>();
  const [error, setError] = useState<Error>();
  
  const { getDeviceById } = apiUtils;

  useEffect(() => {
    if (!deviceId) return;

    getDeviceById(deviceId)
      .then((device) => {
        setDevice(device);
      })
      .catch((error) => {
        setError(error);
      })
  })

  if (error) return <div>Error: {error.message}</div>

  if (!deviceId) return <div>Device id missing</div>
  if (!device) return <div>Loading...</div>

  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Device Information</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Device details and issuance history.</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Device name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{device.name}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Manufacturer</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{device.manufacturer}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Device number</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{device.deviceNumber}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">ID</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{device._id}</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default DeviceInfo
