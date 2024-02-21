import express from 'express';
import DeviceController from '../controllers/deviceController';
import { handleAsyncError } from '../middlewares/errorHandlingMiddleware';

const router = express.Router();

// Route for searching devices by name
router.get('/search/:name', handleAsyncError(DeviceController.searchDevicesByName));

// Route for creating multiple devices, for testing purposes
router.post('/multiple', handleAsyncError(DeviceController.createMultipleDevices));

// Routes for individual devices by ID
router.route('/:id')
  .get(handleAsyncError(DeviceController.getDeviceById))
  .put(handleAsyncError(DeviceController.updateDevice))
  .delete(handleAsyncError(DeviceController.deleteDevice));

// Routes for managing all devices
router.route('/')
  .get(handleAsyncError(DeviceController.getAllDevices))
  .post(handleAsyncError(DeviceController.createDevice));

export default router;
