import express from 'express';
import DeviceController from '../controllers/deviceController';

const router = express.Router();

router.get('/', DeviceController.getAllDevices);
router.get('/:id', DeviceController.getDeviceById);

router.post('/', DeviceController.createDevice);

router.put('/:id', DeviceController.updateDevice);

router.delete('/:id', DeviceController.deleteDevice);

export default router;
