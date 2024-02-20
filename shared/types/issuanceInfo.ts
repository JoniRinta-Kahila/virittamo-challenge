import { DeviceDetails } from "./device";
import { RecipientDetails } from "./recipient";

export interface DeviceIssuanceInfo {
  dateOfIssue: string;
  deviceDetails: DeviceDetails;
  recipientDetails: RecipientDetails;
  returningDate: string;
}

export interface DeviceInformation extends DeviceDetails {
  issuanceHistory: DeviceIssuanceInfo[];
}
