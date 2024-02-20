import React from 'react'
import Layout from './components/layout'
import { Route, Routes } from 'react-router-dom'
import Issuance from './pages/issuance'
import Devices from './pages/devices'
import CreateOrUpdateDevice from './pages/createOrUpdateDevice'
import DeviceInfo from './pages/deviceInfo'

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<div>Dashboard</div>} />
        <Route path="/devices" element={<Devices />} />
        <Route path='/devices/device' element={<CreateOrUpdateDevice />} />
        <Route path="/issuance" element={<Issuance />} />
        <Route path="/issuance/:deviceId" element={<Issuance />} />
        <Route path="/devices/:deviceId" element={<DeviceInfo />} />
        <Route path="/settings" element={<div>Settings</div>} />
        <Route path='*' element={<div>Not found</div>} />
      </Routes>
    </Layout>
  )
}

export default App
