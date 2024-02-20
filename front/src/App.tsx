import React from 'react'
import Layout from './components/layout'
import { Route, Routes } from 'react-router-dom'
import Issuance from './pages.tsx/issuance'
import Devices from './pages.tsx/devices'
import CreateOrUpdateDevice from './pages.tsx/createOrUpdateDevice'
import DeviceInfo from './pages.tsx/deviceInfo'

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<div>Dashboard</div>} />
        <Route path="/devices" element={<Devices />} />
        <Route path='/devices/device' element={<CreateOrUpdateDevice />} />
        <Route path="/issuance" element={<Issuance />} />
        <Route path="/devices/:deviceId" element={<DeviceInfo />} />
        <Route path="/settings" element={<div>Settings</div>} />
        <Route path='*' element={<div>Not found</div>} />
      </Routes>
    </Layout>
  )
}

export default App
