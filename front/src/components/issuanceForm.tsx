import React, { useState } from 'react'
import DatePicker from "react-datepicker";

const IssuanceForm: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [dueDate, setDueDate] = useState<Date | null>(null);
  return (
    <form className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2">
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
