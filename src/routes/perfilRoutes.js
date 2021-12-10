import { Router } from 'express';
import perfilController from '../controllers/PerfilController';
import loginRequerido from '../middlewares/loginRequerido';

const router = new Router();

router.get('/', loginRequerido, perfilController.index);

export default router;
