"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Usuario = require('../models/Usuario'); var _Usuario2 = _interopRequireDefault(_Usuario);
var _Perfil = require('../models/Perfil'); var _Perfil2 = _interopRequireDefault(_Perfil);

class UsuarioController {
  async index(req, res) {
    try {
      const usuarios = await _Usuario2.default.findAll({
        attributes: ['id', 'nome', 'email', 'created_at', 'updated_at'],
        order: [['id', 'DESC']],
        include: {
          model: _Perfil2.default,
          as: 'permissao',
          attributes: ['id', 'perfil'],
        },
      });
      return res.json(usuarios);
    } catch (e) {
      return res.status(400).json({
        errors: [e.text],
      });
    }
  }

  async show(req, res) {
    try {
      const usuario = await _Usuario2.default.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'email', 'created_at', 'updated_at'],
        order: [['id', 'DESC']],
        include: {
          model: _Perfil2.default,
          as: 'permissao',
          attributes: ['id', 'perfil'],
        },
      });
      if (!usuario) {
        return res.status(404).json({
          errors: ['Usuário não existe.'],
        });
      }

      return res.json(usuario);
    } catch (e) {
      return res.status(400).json({
        errors: [e.text],
      });
    }
  }

  async store(req, res) {
    try {
      let usuario = await _Usuario2.default.create(req.body);

      usuario = await _Usuario2.default.findByPk(usuario.id, {
        attributes: ['id', 'nome', 'email', 'created_at', 'updated_at'],
        order: [['id', 'DESC']],
        include: {
          model: _Perfil2.default,
          as: 'permissao',
          attributes: ['id', 'perfil'],
        },
      });
      return res.status(201).json(usuario);
    } catch (e) {
      return res.status(400).json({
        errors: [e.text],
      });
    }
  }

  async update(req, res) {
    try {
      let usuario = await _Usuario2.default.findByPk(req.params.id);
      if (!usuario) {
        return res.status(404).json({
          errors: ['Usuário não existe.'],
        });
      }
      await usuario.update(req.body, {});
      usuario = await _Usuario2.default.findByPk(usuario.id, {
        attributes: ['id', 'nome', 'email', 'created_at', 'updated_at'],
        order: [['id', 'DESC']],
        include: {
          model: _Perfil2.default,
          as: 'permissao',
          attributes: ['id', 'perfil'],
        },
      });
      return res.status(201).json(usuario);
    } catch (e) {
      return res.status(400).json({
        errors: [e.text],
      });
    }
  }

  async delete(req, res) {
    try {
      const usuario = await _Usuario2.default.findByPk(req.params.id);
      if (!usuario) {
        return res.status(404).json({
          errors: ['Usuário não existe.'],
        });
      }
      await usuario.destroy();
      return res.status(204).json();
    } catch (e) {
      return res.status(400).json({
        errors: [e.text],
      });
    }
  }
}

exports. default = new UsuarioController();
