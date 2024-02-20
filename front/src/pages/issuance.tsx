import React from 'react'
import IssuanceForm from '../components/issuanceForm'
import { useParams } from 'react-router-dom';

const Issuance: React.FC = () => {
  const { deviceId } = useParams();

  return (
    <div>
      <h1 className="text-3xl font-semibold leading-9 text-gray-900 mb-8">Device Issuance</h1>
      <IssuanceForm deviceId={deviceId} />
    </div>
  )
}

export default Issuance
