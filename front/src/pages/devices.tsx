import React from 'react'
import DevicesList from '../components/devicesList'
import { Link } from 'react-router-dom'
import { PlusIcon } from '@heroicons/react/24/outline'

const Devices: React.FC = () => {
  return (
    <div>
      <div className='flex items-center mb-8'>
        <h1 className="text-3xl font-semibold leading-9 text-gray-900 mr-8">Devices</h1>
        <Link to="/devices/device" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
          <PlusIcon className="h-5 w-5 inline-block -mt-1" />
        </Link>
      </div>
      <DevicesList />
    </div>
  )
}

export default Devices
