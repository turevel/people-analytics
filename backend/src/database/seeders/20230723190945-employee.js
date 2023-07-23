'use strict';

import employees from '../../data/employees';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('employees', employees);
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('employees', null, {});
	},
};
