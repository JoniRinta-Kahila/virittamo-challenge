import { DeviceDetails } from "./device";
import { RecipientDetails } from "./recipient";

export interface DeviceIssuanceInfo {
  dateOfIssue: number; // Unix timestamp
  deviceDetails: DeviceDetails;
  recipientDetails: RecipientDetails;
  returningDate: number; // Unix timestamp
}

export interface DeviceInformation extends DeviceDetails {
  issuanceHistory: DeviceIssuanceInfo[];
}
