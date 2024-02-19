import express from 'express';
import DeviceController from '../controllers/deviceController';
import { handleAsyncError } from '../middlewares/errorHandlingMiddleware';

const router = express.Router();

router.get('/', handleAsyncError(DeviceController.getAllDevices));
router.get('/:id', handleAsyncError(DeviceController.getDeviceById));

router.post('/', handleAsyncError(DeviceController.createDevice));

router.put('/:id', handleAsyncError(DeviceController.updateDevice));

router.delete('/:id', handleAsyncError(DeviceController.deleteDevice));

export default router;
