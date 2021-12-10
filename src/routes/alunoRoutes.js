import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginRequerido from '../middlewares/loginRequerido';

const router = new Router();

router.post('/', alunoController.store);
router.get('/', loginRequerido, alunoController.index);
router.get('/:id', loginRequerido, alunoController.show);
router.put('/:id', loginRequerido, alunoController.update);
router.delete('/:id', loginRequerido, alunoController.delete);

export default router;
