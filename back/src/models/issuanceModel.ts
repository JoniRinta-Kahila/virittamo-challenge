import mongoose, { Schema, Document } from 'mongoose';
import { DeviceIssuanceInfo } from '../../../shared/types/issuanceInfo';

// Define the interface representing the merged properties of DeviceIssuanceInfo and Document
interface IIssuance extends DeviceIssuanceInfo, Document {}

// Create a Mongoose schema for the Issuance entity with specified properties and their types
const IssuanceSchema = new Schema<IIssuance>({
  dateOfIssue: { type: String, required: true },
  deviceDetails: { type: Object, required: true },
  recipientDetails: { type: Object, required: true },
  returningDate: { type: String, required: true },
})

export default mongoose.model<DeviceIssuanceInfo & Document>('Issuance', IssuanceSchema);
