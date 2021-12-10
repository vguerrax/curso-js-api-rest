"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _MeController = require('../controllers/MeController'); var _MeController2 = _interopRequireDefault(_MeController);
var _loginRequerido = require('../middlewares/loginRequerido'); var _loginRequerido2 = _interopRequireDefault(_loginRequerido);

const router = new (0, _express.Router)();

router.get('/', _loginRequerido2.default, _MeController2.default.show);
router.put('/', _loginRequerido2.default, _MeController2.default.update);
router.delete('/', _loginRequerido2.default, _MeController2.default.delete);

exports. default = router;
