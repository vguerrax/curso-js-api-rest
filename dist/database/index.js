"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Foto = require('../models/Foto'); var _Foto2 = _interopRequireDefault(_Foto);
var _Usuario = require('../models/Usuario'); var _Usuario2 = _interopRequireDefault(_Usuario);
var _Perfil = require('../models/Perfil'); var _Perfil2 = _interopRequireDefault(_Perfil);

const models = [_Aluno2.default, _Foto2.default, _Usuario2.default, _Perfil2.default];
const connection = new (0, _sequelize2.default)(_database2.default);

models.forEach((model) => model.init(connection));

models.forEach((model) => model.associate && model.associate(connection.models));
