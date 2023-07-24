import * as config from '../config';
import { Options, Sequelize } from 'sequelize';

let options: Options;

switch (process.env.NODE_ENV) {
case 'test':
	options = config.test;
	break;
case 'production':
	options = config.production;
	break;
default:
	options = config.development;
}

const connection = new Sequelize(options);

export default connection;
