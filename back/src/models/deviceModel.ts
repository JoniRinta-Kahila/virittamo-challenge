import mongoose, { Schema, Document } from 'mongoose';
import { DeviceDetails } from '../../../shared/types/device';

// Define the interface representing the merged properties of DeviceDetails and Document
interface IDevice extends DeviceDetails, Document {}

// Create a Mongoose schema for the Device entity with specified properties and their types
const DeviceSchema = new Schema<IDevice>({
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  deviceNumber: { type: String, required: true },
});

export default mongoose.model<DeviceDetails & Document>('Device', DeviceSchema);
