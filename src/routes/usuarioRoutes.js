import { Router } from 'express';
import usuarioController from '../controllers/UsuarioController';
import loginRequerido from '../middlewares/loginRequerido';
import adminRequerido from '../middlewares/adminRequerido';

const router = new Router();

router.get('/', loginRequerido, adminRequerido, usuarioController.index);
router.get('/:id', loginRequerido, adminRequerido, usuarioController.show);
router.post('/', loginRequerido, adminRequerido, usuarioController.store);
router.put('/:id', loginRequerido, adminRequerido, usuarioController.update);
router.delete('/:id', loginRequerido, adminRequerido, usuarioController.delete);

export default router;
