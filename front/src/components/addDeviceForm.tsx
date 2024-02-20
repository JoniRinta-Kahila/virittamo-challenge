import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

interface AddDeviceFormProps {
  deviceId?: string;
}

const AddUpdateDeviceForm: React.FC<AddDeviceFormProps> = ({ deviceId }) => {
  const navigate = useNavigate();
  const [name, setName] = React.useState('')
  const [manufacturer, setManufacturer] = React.useState('')
  const [deviceNumber, setDeviceNumber] = React.useState('')

  useEffect(() => {
    if (deviceId) {
      // fetch device details and populate the form
      fetch(`${window.location.protocol}//${window.location.hostname}:3001/api/devices/${deviceId}`)
        .then((response) => response.json())
        .then((data) => {
          setName(data.name)
          setManufacturer(data.manufacturer)
          setDeviceNumber(data.deviceNumber)
        })
    }
  }, [deviceId])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (deviceId) {
      // update device
      fetch(`${window.location.protocol}//${window.location.hostname}:3001/api/devices/${deviceId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, manufacturer, deviceNumber })
      })
        .then(() => {
          return navigate('/devices')
        })
    } else {
      // create new device
      fetch(`${window.location.protocol}//${window.location.hostname}:3001/api/devices`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, manufacturer, deviceNumber })
      })
        .then(() => {
          return navigate('/devices')
        })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
      <div className="px-4 py-6 sm:p-8">
        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <h2 className="text-lg font-semibold leading-6 text-gray-900 col-span-full">Device details</h2>
          <div className="sm:col-span-3">
            <label htmlFor="device-name" className="block text-sm font-medium leading-6 text-gray-900">
              Device name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="device-name"
                id="device-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="manufacturer" className="block text-sm font-medium leading-6 text-gray-900">
              Manufacturer
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="manufacturer"
                id="manufacturer"
                value={manufacturer}
                onChange={(e) => setManufacturer(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="device-number" className="block text-sm font-medium leading-6 text-gray-900">
              Device number
            </label>
            <div className="mt-2">
              <input
                id="device-number"
                name="device-number"
                type="device-number"
                value={deviceNumber}
                onChange={(e) => setDeviceNumber(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default AddUpdateDeviceForm
