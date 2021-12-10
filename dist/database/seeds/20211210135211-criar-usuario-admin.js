"use strict";const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'usuarios',
      [
        {
          nome: 'Administrador',
          email: 'admin@email.com',
          password_hash: await bcryptjs.hash('123456', 8),
          perfil_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],

      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('usuarios', null, {});
  },
};
