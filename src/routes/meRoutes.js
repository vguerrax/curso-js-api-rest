import { Router } from 'express';
import meController from '../controllers/MeController';
import loginRequerido from '../middlewares/loginRequerido';

const router = new Router();

router.get('/', loginRequerido, meController.show);
router.put('/', loginRequerido, meController.update);
router.delete('/', loginRequerido, meController.delete);

export default router;
