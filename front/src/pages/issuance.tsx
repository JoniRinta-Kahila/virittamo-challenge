import React from 'react'
import IssuanceForm from '../components/issuanceForm'

const Issuance: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold leading-9 text-gray-900 mb-8">Device Issuance</h1>
      <IssuanceForm />
    </div>
  )
}

export default Issuance
