"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _path = require('path');

var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);

require('./database');
var _homeRoutes = require('./routes/homeRoutes'); var _homeRoutes2 = _interopRequireDefault(_homeRoutes);
var _tokenRoutes = require('./routes/tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
var _perfilRoutes = require('./routes/perfilRoutes'); var _perfilRoutes2 = _interopRequireDefault(_perfilRoutes);
var _usuarioRoutes = require('./routes/usuarioRoutes'); var _usuarioRoutes2 = _interopRequireDefault(_usuarioRoutes);
var _meRoutes = require('./routes/meRoutes'); var _meRoutes2 = _interopRequireDefault(_meRoutes);
var _alunoRoutes = require('./routes/alunoRoutes'); var _alunoRoutes2 = _interopRequireDefault(_alunoRoutes);
var _fotoRoutes = require('./routes/fotoRoutes'); var _fotoRoutes2 = _interopRequireDefault(_fotoRoutes);

_dotenv2.default.config();

const whiteList = process.env.CORS_WHITELIST.split(',');
whiteList.push(process.env.APP_URL);

const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) callback(null, true);
    else callback(new Error('Not allowed by CORS'));
  },
};

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_cors2.default.call(void 0, corsOptions));
    this.app.use(_helmet2.default.call(void 0, ));
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'uploads')));
  }

  routes() {
    this.app.use('/api-rest/v2', _homeRoutes2.default);
    this.app.use('/api-rest/v2/auth/token', _tokenRoutes2.default);
    this.app.use('/api-rest/v2/perfis', _perfilRoutes2.default);
    this.app.use('/api-rest/v2/usuarios', _usuarioRoutes2.default);
    this.app.use('/api-rest/v2/me', _meRoutes2.default);
    this.app.use('/api-rest/v2/alunos', _alunoRoutes2.default);
    this.app.use('/api-rest/v2/fotos', _fotoRoutes2.default);
  }
}

exports. default = new App().app;
