import mongoose, { Schema, Document } from 'mongoose';
import { DeviceIssuanceInfo } from '../../../shared/types/issuanceInfo';

interface IIssuance extends DeviceIssuanceInfo, Document {}

const IssuanceSchema = new Schema<IIssuance>({
  dateOfIssue: { type: String, required: true },
  deviceDetails: { type: Object, required: true },
  recipientDetails: { type: Object, required: true },
  returningDate: { type: String, required: true },
})

export default mongoose.model<DeviceIssuanceInfo & Document>('Issuance', IssuanceSchema);
