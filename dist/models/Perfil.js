"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Perfil extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: _sequelize2.default.INTEGER,
          primaryKey: true,
          autoIncrement: false,
        },
        perfil: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [4, 255],
              msg: 'O perfil deve ter entre 4 e 255 caracteres',
            },
          },
        },
      },
      {
        tableName: 'perfis',
        sequelize,
      },
    );

    return this;
  }
} exports.default = Perfil;
