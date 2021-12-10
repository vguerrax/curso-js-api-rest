"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);

var _multer3 = require('../config/multer'); var _multer4 = _interopRequireDefault(_multer3);

var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);
var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);

const upload = _multer2.default.call(void 0, _multer4.default).single('foto');

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

        const aluno = await _Aluno2.default.findByPk(aluno_id);
        if (!aluno) {
          return res.status(400).json({
            errors: [`Aluno com id '${aluno_id}' não existe.`],
          });
        }

        const foto = await _Foto2.default.create({ foto: filename, aluno_id });

        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: [e],
        });
      }
    });
  }
}

exports. default = new FotoController();
