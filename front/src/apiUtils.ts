import { DeviceDocument, DevicesResponse } from "./types";
import { DeviceIssuanceInfo } from "../../shared/types/issuanceInfo";

const getDeviceById = async (id: string): Promise<DeviceDocument> => {
  const response = await fetch(`/api/devices/${id}`);
  return await response.json();
}

const getDevicesByPage = async (page: number): Promise<DevicesResponse> => {
  const response = await fetch(`/api/devices?page=${page}`);
  return await response.json();
}

const getIssuancesByDeviceId = async (deviceId: string) => {
  const response = await fetch(`/api/issuances/device/${deviceId}`);
  console.log("getIssuancesByDeviceId", response);
  return await response.json();
}

const searchDevicesByName = async (name: string): Promise<DevicesResponse> => {
  const response = await fetch(`/api/devices/search/${name}`);
  return await response.json();
}

const deleteDeviceById = async (id: string) => {
  const response = await fetch(`/api/devices/${id}`, {
    method: 'DELETE'
  });
  return await response.json();
}

const createIssuance = async (issuanceInfo: DeviceIssuanceInfo) => {
  const response = await fetch(`/api/issuances`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(issuanceInfo)
  });
  return await response.json();
}

export default {
  getDeviceById,
  getIssuancesByDeviceId,
  searchDevicesByName,
  createIssuance,
  getDevicesByPage,
  deleteDeviceById,
}
