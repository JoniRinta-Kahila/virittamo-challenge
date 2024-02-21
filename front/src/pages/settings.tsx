import React from 'react'
import { mockDevices, mockIssuances } from '../mockData'
import { useNavigate } from 'react-router-dom';

const Settings: React.FC = () => {
  const navigate = useNavigate();

  const addTestDevices = async () => {
    fetch('/api/devices/multiple', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mockDevices)
    })
    .then(() => navigate('/devices'))
  }

  const addTestIssuances = async () => {
    fetch('/api/issuances/multiple', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mockIssuances)
    })
    .then(() => navigate('/devices'))
  }

  return (
    <div>
      <h1 className='text-2xl font-semibold'>Settings</h1>
      
      <button onClick={addTestDevices} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded'>
        Add test devices
      </button>

      <button onClick={addTestIssuances} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 my-4 rounded'>
        Add test Issuances
      </button>
    </div>
  )
}

export default Settings
