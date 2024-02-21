import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import apiUtils from '../apiUtils';
import DataList from './datalist/dataList';
import { useNavigate } from 'react-router-dom';

interface IssuanceFormProps {
  deviceId?: string;
}

const IssuanceForm: React.FC<IssuanceFormProps> = ({ deviceId }) => {
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [dueDate, setDueDate] = useState<Date | null>(null);

  const [deviceName, setDeviceName] = useState<string>('');
  const [suggestedValues, setSuggestedValues] = useState<string[]>([]);

  const [manufacturers, setManufacturers] = useState<string[]>([]);
  const [deviceNumbers, setDeviceNumbers] = useState<string[]>([]);

  const [selectedManufacturer, setSelectedManufacturer] = useState<string|undefined>(undefined);
  const [selectedDeviceNumber, setSelectedDeviceNumber] = useState<string|undefined>(undefined);

  const { searchDevicesByName, createIssuance, getDeviceById } = apiUtils;

  // fetch device details and populate the form
  useEffect(() => {
    if (!deviceId) return;
    getDeviceById(deviceId)
      .then((data) => {
        setDeviceName(data.name)
        setSelectedDeviceNumber(data.deviceNumber)
        setSelectedManufacturer(data.manufacturer)
      })
  }, [deviceId, getDeviceById])

  useEffect(() => {
    if (!deviceName) {
      setSuggestedValues([])
      setManufacturers([])
      setDeviceNumbers([])
      return;
    }

    try {
      searchDevicesByName(deviceName)
        .then((data) => {
          const suggestedManufacturers = Array.from(new Set(data.results.map((device) => device.manufacturer)))
          const suggestedDeviceNumbers = Array.from(new Set(data.results.map((device) => device.deviceNumber)))

          setManufacturers(suggestedManufacturers)
          setDeviceNumbers(suggestedDeviceNumbers)
          setSuggestedValues(data.results.map((device) => device.name))
        })
    } catch (error) {
      console.error(error)
    }
  }, [deviceName, searchDevicesByName])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const device = {
      name: deviceName,
      manufacturer: e.currentTarget['manufacturer'].value as string,
      deviceNumber: e.currentTarget['device-number'].value as string,
    }

    const recipient = {
      name: e.currentTarget['recipient-name'].value,
      department: e.currentTarget['recipient-department'].value
    }

    const issuance = {
      issuedAt: startDate,
      dueDate
    }

    createIssuance({
      deviceDetails: device,
      recipientDetails: recipient,
      dateOfIssue: issuance.issuedAt!.toISOString(),
      returningDate: issuance.dueDate!.toISOString()
    })
    .then(() => navigate(`/devices/`))
    .catch((error) => console.error(error))
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
              <DataList
                id="device-name"
                options={suggestedValues}
                inputValue={deviceName}
                setInputValue={setDeviceName}
                className="block w-full px-2 rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="manufacturer" className="block text-sm font-medium leading-6 text-gray-900">
              Manufacturer
            </label>
            <div className="mt-2">
              <select
                
                name="manufacturer"
                id="manufacturer"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                disabled={manufacturers.length === 0}
                // defaultValue={manufacturers.length > 1 ? '' : manufacturers[0]}
                defaultValue={selectedManufacturer || manufacturers.length > 1 ? '' : manufacturers[0]}
                onChange={(e) => setSelectedManufacturer(e.target.value)}
                required
              >
                {manufacturers.length > 1 && <option value="" disabled selected>Select a manufacturer</option>}
                {manufacturers.map((manufacturer) => (
                  <option key={manufacturer} value={manufacturer}>{manufacturer}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="device-number" className="block text-sm font-medium leading-6 text-gray-900">
              Device number
            </label>
            <div className="mt-2">
              <select
                name="device-number"
                id="device-number"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                disabled={deviceNumbers.length === 0}
                // defaultValue={deviceNumbers.length > 1 ? '' : deviceNumbers[0]}
                defaultValue={selectedDeviceNumber || deviceNumbers.length > 1 ? '' : deviceNumbers[0]}
                onChange={(e) => setSelectedDeviceNumber(e.target.value)}
                required
              >
                {deviceNumbers.length > 1 && <option value="" disabled selected>Select a device number</option>}
                {deviceNumbers.map((deviceNumber) => (
                  <option key={deviceNumber} value={deviceNumber}>{deviceNumber}</option>
                ))}
              </select>
            </div>
          </div>

          <h2 className="text-lg font-semibold leading-6 text-gray-900 col-span-full">Recipient details</h2>
          <div className="sm:col-span-3">
            <label htmlFor="recipient-name" className="block text-sm font-medium leading-6 text-gray-900">
              Recipient name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="recipient-name"
                id="recipient-name"
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="recipient-department" className="block text-sm font-medium leading-6 text-gray-900">
              Recipient department
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="recipient-department"
                id="recipient-department"
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>

          <h2 className="text-lg font-semibold leading-6 text-gray-900 col-span-full">Issued at and Due Date</h2>
          <div className="sm:col-span-2 sm:col-start-1">
            <label htmlFor="issued-at" className="block text-sm font-medium leading-6 text-gray-900">
              Issued At
            </label>
            <div className="mt-2">
              <DatePicker
                id='issued-at'
                selected={startDate}
                onChange={setStartDate}
                maxDate={dueDate}
                required
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="due-date" className="block text-sm font-medium leading-6 text-gray-900">
              Due Date
            </label>
            <div className="mt-2">
              <DatePicker
                id='due-date'
                selected={dueDate}
                onChange={setDueDate}
                placeholderText='Select the due'
                minDate={startDate}
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

export default IssuanceForm
