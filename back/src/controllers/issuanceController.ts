import { Request, Response } from 'express';
import Issuance from '../models/issuanceModel';

export default class IssuanceController {
  // Retrieve a paginated list of all issuances
  static getAllIssuances = async (req: Request, res: Response) => {
    // Extract pagination parameters from the request query
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;

    // Fetch the total count of issuances in the database
    const count = await Issuance.countDocuments();

    // Retrieve the issuances based on pagination parameters
    const results = await Issuance.find().skip(skip).limit(limit);

    // Calculate next and previous page numbers for pagination
    const next = page * limit < count ? page + 1 : null;
    const previous = page > 1 ? page - 1 : null;

    // Respond with the paginated list of issuances
    res.status(200).json({
      count,
      next,
      previous,
      results
    });
  }

  // Create a new issuance
  static createIssuance = async (req: Request, res: Response) => {
    const issuance = req.body;
    const newIssuance = new Issuance(issuance);
    await newIssuance.save();
    res.status(201).json(newIssuance);
  };

  // Create multiple issuances, for testing purposes
  static createMultipleIssuances = async (req: Request, res: Response) => {
    const issuances = req.body;
    const newIssuances = await Issuance.insertMany(issuances);
    res.status(201).json(newIssuances);
  };

  // Retrieve an issuance by its ID
  static getIssuanceById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const issuance = await Issuance.findById(id);
    res.status(200).json(issuance);
  };

  // Retrieve issuances by device ID
  static getIssuancesByDeviceId = async (req: Request, res: Response) => {
    const { id } = req.params;
    const issuances = await Issuance.find({ deviceId: id });
    res.status(200).json(issuances);
  }

  // Update an issuance by its ID
  static updateIssuance = async (req: Request, res: Response) => {
    const { id } = req.params;
    const issuance = req.body;
    const updatedIssuance = await Issuance.findByIdAndUpdate(id, issuance, { new: true });
    res.status(200).json(updatedIssuance);
  };

  // Delete an issuance by its ID
  static deleteIssuance = async (req: Request, res: Response) => {
    const { id } = req.params;
    await Issuance.findByIdAndDelete(id);
    res.status(200).json({ message: 'Issuance deleted successfully' });
  };
}