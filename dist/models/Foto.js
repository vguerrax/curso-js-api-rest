"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

var _app = require('../config/app'); var _app2 = _interopRequireDefault(_app);

 class Foto extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        foto: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'A foto não pode estar vazia.',
            },
          },
        },
        url: {
          type: _sequelize2.default.VIRTUAL,
          get() {
            return `${_app2.default.url}/images/${this.getDataValue('foto')}`;
          },
        },
      },
      { sequelize },
    );
    return this;
  }
} exports.default = Foto;
