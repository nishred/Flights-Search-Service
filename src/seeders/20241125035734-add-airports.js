"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("Airports", [
      {
        name: "Murtala Muhammed International Airport",
        address: "Ikeja, Lagos",
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Nnamdi Azikiwe International Airport",
        address: "Abuja",
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Port Harcourt International Airport",
        address: "Port Harcourt",
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kotoka International Airport",
        address: "Accra",
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kigali International Airport",
        address: "Kigali",
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jomo Kenyatta International Airport",
        address: "Nairobi",
        cityId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "OR Tambo International Airport",
        address: "Johannesburg",
        cityId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cape Town International Airport",
        address: "Cape Town",
        cityId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kotoka International Airport",
        address: "Accra",
        cityId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Kotoka International Airport",
        address: "Accra",
        cityId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
