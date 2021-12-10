"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Perfil = require('../models/Perfil'); var _Perfil2 = _interopRequireDefault(_Perfil);

class PerfilController {
  async index(req, res) {
    try {
      const perfis = await _Perfil2.default.findAll({ attributes: ['id', 'perfil'] });
      return res.json(perfis);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new PerfilController();
