"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class Usuario extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'O nome deve ter entre 3 e 255 caracteres',
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
        perfil_id: {
          type: _sequelize2.default.INTEGER,
          defaultValue: 0,
          validate: {
            isInt: {
              msg: 'O id do perfil precisa ser um inteiro',
            },
            min: {
              args: 1,
              msg: 'O id do perfil deve ser válido',
            },
          },
        },
        passwordHash: {
          type: _sequelize2.default.STRING,
          defaultValue: '',
        },
        password: {
          type: _sequelize2.default.VIRTUAL,
          defaultValue: '',
          validate: {
            len: {
              args: [6, 50],
              msg: 'A senha deve ter entre 6 e 50 caracteres',
            },
          },
        },
      },
      { sequelize },
    );

    this.addHook('beforeSave', async (usuario) => {
      if (usuario.password) { usuario.passwordHash = await _bcryptjs2.default.hash(usuario.password, 8); }
    });

    return this;
  }

  passwordIsValid(password) {
    return _bcryptjs2.default.compare(password, this.passwordHash);
  }

  static associate(models) {
    this.belongsTo(models.Perfil, { as: 'permissao', foreignKey: 'perfil_id' });
  }
} exports.default = Usuario;
