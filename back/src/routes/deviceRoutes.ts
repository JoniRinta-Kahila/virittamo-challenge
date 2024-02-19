import express from 'express';
import DeviceController from '../controllers/deviceController';
import { handleAsyncError } from '../middlewares/errorHandlingMiddleware';

const router = express.Router();

router.get('/search/:name', handleAsyncError(DeviceController.searchDevicesByName));

router.route('/:id')
  .get(handleAsyncError(DeviceController.getDeviceById))
  .put(handleAsyncError(DeviceController.updateDevice))
  .delete(handleAsyncError(DeviceController.deleteDevice));

router.route('/')
  .get(handleAsyncError(DeviceController.getAllDevices))
  .post(handleAsyncError(DeviceController.createDevice));

export default router;
