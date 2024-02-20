import React from 'react'
import AddUpdateDeviceForm from '../components/addDeviceForm'
import { useSearchParams } from 'react-router-dom';

const CreateOrUpdateDevice: React.FC = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id') ?? undefined;

  return (
    <div>
      <h1 className="text-3xl font-semibold leading-9 text-gray-900 mb-8">{!id ? "Create new device" : "Update device"}</h1>
      <AddUpdateDeviceForm deviceId={id} />
    </div>
  )
}

export default CreateOrUpdateDevice
