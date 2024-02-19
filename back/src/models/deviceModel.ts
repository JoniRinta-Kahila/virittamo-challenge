import mongoose, { Schema, Document } from 'mongoose';
import { DeviceDetails } from '../../../shared/types/device';

interface IDevice extends DeviceDetails, Document {}

const DeviceSchema = new Schema<IDevice>({
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  deviceNumber: { type: String, required: true },
});

export default mongoose.model<DeviceDetails & Document>('Device', DeviceSchema);
