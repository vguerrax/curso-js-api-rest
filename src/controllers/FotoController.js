import multer from 'multer';

import multerConfig from '../config/multer';

import Foto from '../models/Foto';
import Aluno from '../models/Aluno';

const upload = multer(multerConfig).single('foto');

class FotoController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      try {
        const { filename } = req.file;
        const { aluno_id } = req.body;

        if (!aluno_id) {
          return res.status(400).json({
            errors: ['Id do aluno é obrigatório.'],
          });
        }

        const aluno = await Aluno.findByPk(aluno_id);
        if (!aluno) {
          return res.status(400).json({
            errors: [`Aluno com id '${aluno_id}' não existe.`],
          });
        }

        const foto = await Foto.create({ foto: filename, aluno_id });

        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: [e],
        });
      }
    });
  }
}

export default new FotoController();
