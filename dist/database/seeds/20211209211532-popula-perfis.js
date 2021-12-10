"use strict";module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'perfis',
      [
        {
          id: 1, perfil: 'ADMIN', created_at: new Date(), updated_at: new Date(),
        },
        {
          id: 2, perfil: 'ALUNO', created_at: new Date(), updated_at: new Date(),
        },
        {
          id: 3, perfil: 'PROFESSOR', created_at: new Date(), updated_at: new Date(),
        },
      ],

      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('perfis', null, {});
  },
};
