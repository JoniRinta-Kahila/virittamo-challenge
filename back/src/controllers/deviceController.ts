import { Request, Response } from 'express';
import Device from '../models/deviceModel';

export default class DeviceController {
  static getAllDevices = async (req: Request, res: Response) => {
    console.log("GetAllDevices");
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    const count = await Device.countDocuments();
    const results = await Device.find().skip(skip).limit(limit);
    
    const next = page * limit < count ? page + 1 : null;
    const previous = page > 1 ? page - 1 : null;

    res.status(200).json({
      count,
      next,
      previous,
      results
    });
  }

  static createDevice = async (req: Request, res: Response) => {
    console.log("CreateDevice");
    const device = req.body;
    const newDevice = new Device(device);
    await newDevice.save();
    res.status(201).json(newDevice);
  };

  static getDeviceById = async (req: Request, res: Response) => {
    console.log("GetDeviceById");
    const { id } = req.params;
    const device = await Device.findById(id);
    res.status(200).json(device);
  };

  static updateDevice = async (req: Request, res: Response) => {
    console.log("UpdateDevice");
    const { id } = req.params;
    const device = req.body;
    const updatedDevice = await Device.findByIdAndUpdate(id, device, { new: true });
    res.status(200).json(updatedDevice);
  };

  static deleteDevice = async (req: Request, res: Response) => {
    console.log("DeleteDevice");
    const { id } = req.params;
    await Device.findByIdAndDelete(id);
    res.status(200).json({ message: 'Device deleted successfully' });
  };

  static searchDevicesByName = async (req: Request, res: Response) => {
    console.log("SearchDevicesByName");
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    const name = req.params.name;
    if (!name || typeof name !== 'string') throw new Error('Invalid name');
    const results = await Device.find({ name: { $regex: new RegExp(name, 'i') } }).skip(skip).limit(limit);
    const count = results.length;
    const next = page * limit < count ? page + 1 : null;
    const previous = page > 1 ? page - 1 : null;
    res.status(200).json({
      count,
      next,
      previous,
      results
    });
  }
}