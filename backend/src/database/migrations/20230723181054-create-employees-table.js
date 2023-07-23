'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		await queryInterface.createTable(
			'employees',
			{
				registration: {
					autoIncrement: true,
					allowNull: false,
					primaryKey: true,
					type: Sequelize.INTEGER,
				},
				name: {
					allowNull: false,
					type: Sequelize.STRING,
				},
				email: {
					allowNull: false,
					type: Sequelize.STRING,
				},
				leader_email: {
					type: Sequelize.STRING,
				},
				admission: {
					allowNull: false,
					type: Sequelize.DATE,
				},
				termination: {
					type: Sequelize.DATE,
				},
				job_title: {
					allowNull: false,
					type: Sequelize.STRING,
				},
				status: {
					allowNull: false,
					type: Sequelize.BOOLEAN,
				},
			},
		);
	},

	async down (queryInterface, Sequelize) {
		await queryInterface.dropTable('employees');
	},
};
