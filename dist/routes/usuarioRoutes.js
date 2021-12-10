"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UsuarioController = require('../controllers/UsuarioController'); var _UsuarioController2 = _interopRequireDefault(_UsuarioController);
var _loginRequerido = require('../middlewares/loginRequerido'); var _loginRequerido2 = _interopRequireDefault(_loginRequerido);
var _adminRequerido = require('../middlewares/adminRequerido'); var _adminRequerido2 = _interopRequireDefault(_adminRequerido);

const router = new (0, _express.Router)();

router.get('/', _loginRequerido2.default, _adminRequerido2.default, _UsuarioController2.default.index);
router.get('/:id', _loginRequerido2.default, _adminRequerido2.default, _UsuarioController2.default.show);
router.post('/', _loginRequerido2.default, _adminRequerido2.default, _UsuarioController2.default.store);
router.put('/:id', _loginRequerido2.default, _adminRequerido2.default, _UsuarioController2.default.update);
router.delete('/:id', _loginRequerido2.default, _adminRequerido2.default, _UsuarioController2.default.delete);

exports. default = router;
