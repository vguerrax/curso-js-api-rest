import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'O nome deve ter entre 3 e 255 caracteres',
            },
          },
        },
        email: {
          type: Sequelize.STRING,
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
        passwordHash: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        password: {
          type: Sequelize.VIRTUAL,
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
      if (usuario.password) { usuario.passwordHash = await bcryptjs.hash(usuario.password, 8); }
    });

    return this;
  }
}
