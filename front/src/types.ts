import { DeviceDetails } from "../../shared/types/device";

export interface DeviceDocument extends DeviceDetails {
  "_id": string;
  "__v": number;
}

export interface DevicesResponse {
  count: number;
  next: number | null;
  previous: number | null;
  results: DeviceDocument[];
}