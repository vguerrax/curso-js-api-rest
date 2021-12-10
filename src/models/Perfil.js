import Sequelize, { Model } from 'sequelize';

export default class Perfil extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: false,
        },
        perfil: {
          type: Sequelize.STRING,
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
}
