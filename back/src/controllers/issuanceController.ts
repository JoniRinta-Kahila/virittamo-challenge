import { Request, Response } from 'express';

export default class IssuanceController {
  static getAllIssuances = async (req: Request, res: Response) => {
    console.log("GetAllIssuances");
    res.status(200).json({ message: 'GetAllIssuances' });
  }

  static createIssuance = async (req: Request, res: Response) => {
    console.log("CreateIssuance");
    res.status(201).json({ message: 'CreateIssuance' });
  };

  static getIssuanceById = async (req: Request, res: Response) => {
    console.log("GetIssuanceById");
    res.status(200).json({ message: 'GetIssuanceById' });
  };

  static updateIssuance = async (req: Request, res: Response) => {
    console.log("UpdateIssuance");
    res.status(200).json({ message: 'UpdateIssuance' });
  };

  static deleteIssuance = async (req: Request, res: Response) => {
    console.log("DeleteIssuance");
    res.status(200).json({ message: 'DeleteIssuance' });
  };
}