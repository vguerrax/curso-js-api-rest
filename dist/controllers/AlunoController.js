"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await _Aluno2.default.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], ['galeria', 'id', 'DESC']],
        include: {
          model: _Foto2.default,
          as: 'galeria',
          attributes: ['id', 'foto', 'url'],
        },
      });
      return res.json(alunos);
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: [e.text],
      });
    }
  }

  async show(req, res) {
    try {
      if (!req.params.id) return res.json({ error: 'id é parâmetro obrigatório.' });

      const aluno = await _Aluno2.default.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'sobrenome', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], ['galeria', 'id', 'DESC']],
        include: {
          model: _Foto2.default,
          as: 'galeria',
          attributes: ['id', 'foto', 'url'],
        },
      });
      if (!aluno) {
        return res.status(404).json({
          errors: ['Aluno não existe.'],
        });
      }

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: [e.text],
      });
    }
  }

  async store(req, res) {
    try {
      const aluno = await _Aluno2.default.create(req.body);
      return res.status(201).json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: [e.text],
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) return res.json({ error: 'id é parâmetro obrigatório.' });

      const aluno = await _Aluno2.default.findByPk(req.params.id);
      if (!aluno) {
        return res.status(404).json({
          errors: ['Aluno não existe.'],
        });
      }
      await aluno.update(req.body);
      return res.status(200).json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: [e.text],
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) return res.json({ error: 'id é parâmetro obrigatório.' });

      const aluno = await _Aluno2.default.findByPk(req.params.id);
      if (!aluno) {
        return res.status(404).json({
          errors: ['Aluno não existe.'],
        });
      }
      await aluno.destroy();
      return res.status(204).json();
    } catch (e) {
      return res.status(400).json({
        errors: [e.text],
      });
    }
  }
}

exports. default = new AlunoController();
