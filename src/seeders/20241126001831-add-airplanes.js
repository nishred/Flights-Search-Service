'use strict';

const { query } = require('express');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * 
     
    * 
     * 
    */

     await queryInterface.bulkInsert('Airplanes', [

         {modelNumber : 'Boeing 747', capacity : 416, createdAt : new Date(), updatedAt : new Date()},
          {modelNumber : 'Boeing 777', capacity : 550, createdAt : new Date(), updatedAt : new Date()},
          {modelNumber : 'Boeing 787', capacity : 330, createdAt : new Date(), updatedAt : new Date()},
          {modelNumber : 'Airbus A380', capacity : 853, createdAt : new Date(), updatedAt : new Date()},
          {modelNumber : 'Airbus A350', capacity : 440, createdAt : new Date(), updatedAt : new Date()},
          {modelNumber : 'Airbus A330', capacity : 335, createdAt : new Date(), updatedAt : new Date()},
          {modelNumber : 'Airbus A320', capacity : 180, createdAt : new Date(), updatedAt : new Date()},
          {modelNumber : 'Airbus A319', capacity : 160, createdAt : new Date(), updatedAt : new Date()},
          {modelNumber : "Embraer E190", capacity : 114, createdAt : new Date(), updatedAt : new Date()},
          {modelNumber : "Bombardier CRJ900", capacity : 90, createdAt : new Date(), updatedAt : new Date()},
          {modelNumber : "Bombardier Q400", capacity : 90, createdAt : new Date(), updatedAt : new Date()},
          {modelNumber : "ATR 72", capacity : 78, createdAt : new Date(), updatedAt : new Date()}

     ],{})


  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
