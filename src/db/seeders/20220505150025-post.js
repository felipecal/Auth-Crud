'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('post', [{
      title: 'Desenvolvimento Web',
      content: 'Falar sobre as taticas para aprimorar o desempenho',
      user_id: 4
    },
    {
      title: 'Desenvolvimento Web Front',
      content: 'Falar sobre as taticas para aprimorar o desempenho',
      user_id: 3
    },
    {
      title: 'Técnicas de Back-end',
      content: 'falar sobre objetos em js',
      user_id: 1
    },
  {
    title: 'Back-end',
    content: 'Explicar melhor sobre fragmentação no GraphQL',
    user_id: 2
  }], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('post', null, {});
  }
};
