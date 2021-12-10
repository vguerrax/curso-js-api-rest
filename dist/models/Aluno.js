"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'O nome deve ter entre 3 e 255 caracteres.',
            },
          },
        },
        sobrenome: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'O sobrenome deve ter entre 3 e 255 caracteres.',
            },
          },
        },
        email: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          unique: {
            msg: 'Email já existe.',
          },
          validate: {
            isEmail: {
              msg: 'O email deve ser válido.',
            },
          },
        },
        idade: _sequelize2.default.INTEGER,
        peso: _sequelize2.default.FLOAT,
        altura: _sequelize2.default.FLOAT,
      },
      { sequelize },
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { as: 'galeria', foreignKey: 'aluno_id' });
  }
} exports.default = Aluno;
