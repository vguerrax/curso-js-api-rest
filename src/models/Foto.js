import Sequelize, { Model } from 'sequelize';

import appConfig from '../config/app';

export default class Foto extends Model {
  static init(sequelize) {
    super.init(
      {
        foto: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'A foto não pode estar vazia.',
            },
          },
        },
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${appConfig.url}/images/${this.getDataValue('foto')}`;
          },
        },
      },
      { sequelize },
    );
    return this;
  }
}
