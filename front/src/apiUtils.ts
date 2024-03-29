import { DeviceDocument, DevicesResponse, IssuanceDocument } from "./types";
import { DeviceIssuanceInfo } from "../../shared/types/issuanceInfo";
import { DeviceDetails } from "../../shared/types/device";

const getDeviceById = async (id: string): Promise<DeviceDocument> => {
  const response = await fetch(`/api/devices/${id}`);
  return await response.json();
}

const getDevicesByPage = async (page: number): Promise<DevicesResponse> => {
  const response = await fetch(`/api/devices?page=${page}`);
  return await response.json();
}

const postDevice = async (device: DeviceDetails): Promise<DeviceDocument> => {
  const response = await fetch(`/api/devices`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(device)
  });
  return await response.json();
}

const updateDevice = async (id: string, device: DeviceDetails): Promise<DeviceDocument> => {
  const response = await fetch(`/api/devices/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(device)
  });
  return await response.json();
}

const getIssuancesByDeviceId = async (deviceId: string): Promise<IssuanceDocument[]> => {
  const response = await fetch(`/api/issuances/device/${deviceId}`);
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

const createIssuance = async (issuanceInfo: DeviceIssuanceInfo): Promise<IssuanceDocument> => {
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
  postDevice,
  updateDevice,
}
