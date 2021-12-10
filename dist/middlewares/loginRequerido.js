"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Usuario = require('../models/Usuario'); var _Usuario2 = _interopRequireDefault(_Usuario);

exports. default = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Autorização requerida.'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = _jsonwebtoken2.default.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const usuario = await _Usuario2.default.findOne({ where: { id, email } });
    if (!usuario) {
      return res.status(401).json({
        errors: ['Token inválido.'],
      });
    }

    req.userId = id;
    req.userEmail = email;
    req.userPerfil = usuario.perfil_id;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token inválido.'],
    });
  }
};
