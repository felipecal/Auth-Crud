"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "user",
      [
        {
          first_name: "Felipe",
          last_name: "Caldas",
          email: "felipe@gmail.com",
        },
        {
          first_name: "Daniel",
          last_name: "Oliveira",
          email: "daniel@gmail.com",
        },
        {
          first_name: "Pedro",
          last_name: "Oliveira",
          email: "pedro@gmail.com",
        },
        {
          first_name: "Camilo",
          last_name: "Fernandes",
          email: "camilo@gmail.com",
        },
        {
          first_name: "Gabriel",
          last_name: "Felix",
          email: "gabriel@gmail.com",
        },
        {
          first_name: "Lucas",
          last_name: "Stequero",
          email: "stequero@gmail.com",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("user", null, {});
  },
};
