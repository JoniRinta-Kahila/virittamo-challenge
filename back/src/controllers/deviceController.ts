import { Request, Response } from 'express';
import Device from '../models/deviceModel';

export default class DeviceController {
  // Retrieve a paginated list of all devices
  static getAllDevices = async (req: Request, res: Response) => {
    // Extract pagination parameters from the request query
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    // Fetch the total count of devices in the database
    const count = await Device.countDocuments();

    // Retrieve the devices based on pagination parameters
    const results = await Device.find().skip(skip).limit(limit);

    // Calculate next and previous page numbers for pagination
    const next = page * limit < count ? page + 1 : null;
    const previous = page > 1 ? page - 1 : null;

    // Respond with the paginated list of devices
    res.status(200).json({
      count,
      next,
      previous,
      results
    });
  }

  // Create a new device
  static createDevice = async (req: Request, res: Response) => {
    const device = req.body;
    const newDevice = new Device(device);
    await newDevice.save();
    res.status(201).json(newDevice);
  };

  // Retrieve a device by its ID
  static getDeviceById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const device = await Device.findById(id);
    res.status(200).json(device);
  };

  // Update a device by its ID
  static updateDevice = async (req: Request, res: Response) => {
    const { id } = req.params;
    const device = req.body;
    const updatedDevice = await Device.findByIdAndUpdate(id, device, { new: true });
    res.status(200).json(updatedDevice);
  };

  // Delete a device by its ID
  static deleteDevice = async (req: Request, res: Response) => {
    const { id } = req.params;
    await Device.findByIdAndDelete(id);
    res.status(200).json({ message: 'Device deleted successfully' });
  };

  // Search devices by name with pagination
  static searchDevicesByName = async (req: Request, res: Response) => {
    // Extract pagination parameters and name from the request query and parameters
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    const name = req.params.name;

    // Validate the name parameter
    if (!name || typeof name !== 'string') throw new Error('Invalid name');

    // Search devices by name using case-insensitive regex
    const results = await Device.find({ name: { $regex: new RegExp(name, 'i') } }).skip(skip).limit(limit);

    // Calculate next and previous page numbers for pagination
    const count = results.length;
    const next = page * limit < count ? page + 1 : null;
    const previous = page > 1 ? page - 1 : null;

    // Respond with the paginated list of matching devices
    res.status(200).json({
      count,
      next,
      previous,
      results
    });
  }
}