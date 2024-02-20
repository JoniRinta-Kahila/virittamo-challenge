import { DeviceDetails } from "../../shared/types/device";
import { DeviceIssuanceInfo } from "../../shared/types/issuanceInfo";

export interface DeviceDocument extends DeviceDetails {
  "_id": string;
  "__v": number;
}

export interface IssuanceDocument extends DeviceIssuanceInfo {
  "_id": string;
  "__v": number;
}

export interface DevicesResponse {
  count: number;
  next: number | null;
  previous: number | null;
  results: DeviceDocument[];
}