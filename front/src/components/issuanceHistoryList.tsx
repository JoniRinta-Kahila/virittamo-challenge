import React, { useEffect } from 'react'
import apiUtils from '../apiUtils';
import { IssuanceDocument } from '../types';

interface IssuanceHistoryListProps {
  deviceId: string;
}

const IssuanceHistoryList: React.FC<IssuanceHistoryListProps> = ({ deviceId }) => {
  const { getIssuancesByDeviceId } = apiUtils;
  const [history, setHistory] = React.useState<IssuanceDocument[]>([])

  useEffect(() => {
    getIssuancesByDeviceId(deviceId)
      .then((data) => {
        setHistory(data);
      })
  }, [deviceId, getIssuancesByDeviceId])

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {history.map((issuance) => (
        <li
          key={issuance._id}
          className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6 lg:px-8"
        >
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                <a >
                  <span className="absolute inset-x-0 -top-px bottom-0" />
                  {issuance.recipientDetails.name}
                </a>
              </p>
              <p className="mt-1 flex text-xs leading-5 text-gray-500">
                {issuance.recipientDetails.department}
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-x-4">
            <div className="hidden sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{new Date(issuance.dateOfIssue).toLocaleDateString()} - {new Date(issuance.returningDate).toLocaleDateString()}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default IssuanceHistoryList
