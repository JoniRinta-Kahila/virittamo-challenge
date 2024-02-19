import React from 'react'
import Layout from './components/layout'
import { Route, Routes } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<div>Dashboard</div>} />
        <Route path="/devices" element={<div>Devices</div>} />
        <Route path="/issuance" element={<div>Device issuance</div>} />
        <Route path="/devices/:deviceId" element={<div>Device details</div>} />
        <Route path="/settings" element={<div>Settings</div>} />
        <Route path='*' element={<div>Not found</div>} />
      </Routes>
    </Layout>
  )
}

export default App
