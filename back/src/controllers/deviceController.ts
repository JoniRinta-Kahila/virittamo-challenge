import { Request, Response } from 'express';
import Device from '../models/deviceModel';

export default class DeviceController {
  static getAllDevices = async (_req: Request, res: Response) => {
    console.log("GetAllDevices");
    const devices = await Device.find();
    res.status(200).json(devices);
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
}