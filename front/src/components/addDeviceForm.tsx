import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import apiUtils from '../apiUtils';
import InputWithLabel from './inputWithLabel';

interface AddDeviceFormProps {
  deviceId?: string;
}

const AddUpdateDeviceForm: React.FC<AddDeviceFormProps> = ({ deviceId }) => {
  const navigate = useNavigate();
  const [name, setName] = React.useState('')
  const [manufacturer, setManufacturer] = React.useState('')
  const [deviceNumber, setDeviceNumber] = React.useState('')
  const { getDeviceById, postDevice, updateDevice } = apiUtils;

  useEffect(() => {
    if (deviceId) {
      // fetch device details and populate the form
      getDeviceById(deviceId)
        .then((data) => {
          setName(data.name)
          setManufacturer(data.manufacturer)
          setDeviceNumber(data.deviceNumber)
        })
    }
  }, [deviceId, getDeviceById])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (deviceId) {
      // update device
      updateDevice(deviceId, { name, manufacturer, deviceNumber })
        .then(() => {
          return navigate('/devices')
        });
    } else {
      // create new device
      postDevice({ name, manufacturer, deviceNumber })
        .then(() => {
          return navigate('/devices')
        });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
      <div className="px-4 py-6 sm:p-8">
        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <h2 className="text-lg font-semibold leading-6 text-gray-900 col-span-full">Device details</h2>
          <div className="sm:col-span-3">
            <InputWithLabel
              label="Device name"
              inputValue={name}
              setInputValue={setName}
              id="device-name"
              required
            />
          </div>
          <div className="sm:col-span-3">
            <InputWithLabel
              label="Manufacturer"
              inputValue={manufacturer}
              setInputValue={setManufacturer}
              id="manufacturer"
              required
            />
          </div>

          <div className="sm:col-span-3">
          <InputWithLabel
              label="Device number"
              inputValue={deviceNumber}
              setInputValue={setDeviceNumber}
              id="device-number"
              required
            />
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
