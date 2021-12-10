import { Router } from 'express';

import fotoController from '../controllers/FotoController';
import loginRequerido from '../middlewares/loginRequerido';

const router = new Router();

router.post('/', loginRequerido, fotoController.store);

export default router;
