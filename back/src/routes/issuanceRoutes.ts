import express from 'express';
import IssuanceController from '../controllers/issuanceController';
import { handleAsyncError } from '../middlewares/errorHandlingMiddleware';

const router = express.Router();

// Route for retrieving issuances associated with a specific device ID
router.route('/device/:deviceId')
  .get(handleAsyncError(IssuanceController.getIssuancesByDeviceId));

// Routes for individual issuances by ID
router.route('/:id')
  .get(handleAsyncError(IssuanceController.getIssuanceById))
  .put(handleAsyncError(IssuanceController.updateIssuance))
  .delete(handleAsyncError(IssuanceController.deleteIssuance));

// Routes for managing all issuances
router.route('/')
  .get(handleAsyncError(IssuanceController.getAllIssuances))
  .post(handleAsyncError(IssuanceController.createIssuance));

export default router;
