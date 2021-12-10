"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _AlunoController = require('../controllers/AlunoController'); var _AlunoController2 = _interopRequireDefault(_AlunoController);
var _loginRequerido = require('../middlewares/loginRequerido'); var _loginRequerido2 = _interopRequireDefault(_loginRequerido);

const router = new (0, _express.Router)();

router.post('/', _AlunoController2.default.store);
router.get('/', _loginRequerido2.default, _AlunoController2.default.index);
router.get('/:id', _loginRequerido2.default, _AlunoController2.default.show);
router.put('/:id', _loginRequerido2.default, _AlunoController2.default.update);
router.delete('/:id', _loginRequerido2.default, _AlunoController2.default.delete);

exports. default = router;
