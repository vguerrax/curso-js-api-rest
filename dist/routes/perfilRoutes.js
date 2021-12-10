"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _PerfilController = require('../controllers/PerfilController'); var _PerfilController2 = _interopRequireDefault(_PerfilController);
var _loginRequerido = require('../middlewares/loginRequerido'); var _loginRequerido2 = _interopRequireDefault(_loginRequerido);

const router = new (0, _express.Router)();

router.get('/', _loginRequerido2.default, _PerfilController2.default.index);

exports. default = router;
