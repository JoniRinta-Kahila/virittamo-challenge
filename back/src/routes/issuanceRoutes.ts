import express from 'express';
import IssuanceController from '../controllers/issuanceController';
import { handleAsyncError } from '../middlewares/errorHandlingMiddleware';

const router = express.Router();

router.route('/:id')
  .get(handleAsyncError(IssuanceController.getIssuanceById))
  .put(handleAsyncError(IssuanceController.updateIssuance))
  .delete(handleAsyncError(IssuanceController.deleteIssuance));

router.route('/')
  .get(handleAsyncError(IssuanceController.getAllIssuances))
  .post(handleAsyncError(IssuanceController.createIssuance));

export default router;
