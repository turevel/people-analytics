import connection from '../connection';
import { Model, DataTypes } from 'sequelize';

class EmployeeModel extends Model {
	declare registration: number;
	declare name: string;
	declare email: string;
	declare leader_email: string;
	declare admission: Date;
	declare termination: Date;
	declare job_title: string;
	declare status: boolean;
}

EmployeeModel.init({
	registration: {
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
		type: DataTypes.INTEGER,
	},
	name: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	email: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	leader_email: {
		type: DataTypes.STRING,
	},
	admission: {
		allowNull: false,
		type: DataTypes.DATE,
	},
	termination: {
		type: DataTypes.DATE,
	},
	job_title: {
		allowNull: false,
		type: DataTypes.STRING,
	},
	status: {
		allowNull: false,
		type: DataTypes.BOOLEAN,
	},
}, {
	sequelize: connection,
	modelName: 'Employees',
	tableName: 'employees',
	timestamps: false,
});

export default EmployeeModel;
