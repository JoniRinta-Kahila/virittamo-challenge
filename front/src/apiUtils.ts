import { DeviceDocument } from "./types";

const getDeviceById = async (id: string): Promise<DeviceDocument> => {
  const response = await fetch(`${window.location.protocol}//${window.location.hostname}:3001/api/devices/${id}`);
  return await response.json();
}

export default {
  getDeviceById,
}