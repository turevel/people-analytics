import App from './app';
import connection from './database/connection';

const API_PORT = Number(process.env.API_PORT);

connection.authenticate()
	.then(() => new App().start(API_PORT))
	.catch(() => console.log('Falha ao se conectar com o banco de dados!'));
