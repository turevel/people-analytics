import dotenvSafe from 'dotenv-safe';
import { Options } from 'sequelize';

dotenvSafe.config();

const options: Options = {
	host: process.env.MYSQL_HOST,
	port: Number(process.env.MYSQL_PORT),
	username: process.env.MYSQL_USERNAME,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE,
	logging: false,
	dialect: 'mysql',
};

export const test = options;
export const development = options;
export const production = options;
