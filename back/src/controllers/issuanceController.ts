import { Request, Response } from 'express';
import Issuance from '../models/issuanceModel';

export default class IssuanceController {
  static getAllIssuances = async (req: Request, res: Response) => {
    console.log("GetAllIssuances");
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    const count = await Issuance.countDocuments();
    const results = await Issuance.find().skip(skip).limit(limit);

    const next = page * limit < count ? page + 1 : null;
    const previous = page > 1 ? page - 1 : null;

    res.status(200).json({
      count,
      next,
      previous,
      results
    });
  }

  static createIssuance = async (req: Request, res: Response) => {
    console.log("CreateIssuance");
    const issuance = req.body;
    const newIssuance = new Issuance(issuance);
    await newIssuance.save();
    res.status(201).json(newIssuance);
  };

  static getIssuanceById = async (req: Request, res: Response) => {
    console.log("GetIssuanceById");
    const { id } = req.params;
    const issuance = await Issuance.findById(id);
    res.status(200).json(issuance);
  };

  static getIssuancesByDeviceId = async (req: Request, res: Response) => {
    console.log("GetIssuancesByDeviceId");
    const { id } = req.params;
    const issuances = await Issuance.find({ deviceId: id });
    res.status(200).json(issuances);
  }

  static updateIssuance = async (req: Request, res: Response) => {
    console.log("UpdateIssuance");
    const { id } = req.params;
    const issuance = req.body;
    const updatedIssuance = await Issuance.findByIdAndUpdate(id, issuance, { new: true });
    res.status(200).json(updatedIssuance);
  };

  static deleteIssuance = async (req: Request, res: Response) => {
    console.log("DeleteIssuance");
    const { id } = req.params;
    await Issuance.findByIdAndDelete(id);
    res.status(200).json({ message: 'Issuance deleted successfully' });
  };
}