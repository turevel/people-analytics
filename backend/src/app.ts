import 'express-async-errors';
import errorHandler from './middlewares/errorHandler';
import router from './routes';
import cors from 'cors';
import express, { Express } from 'express';

class App {
	public app: Express;

	constructor() {
		this.app = express();
		this.config();
	}

	config() {
		this.app.use(express.json());
		this.app.use(cors());
		this.app.use(router);
		this.app.use(errorHandler);
	}

	start(port: number) {
		this.app
			.listen(port, () => console.log(`API rodando na porta ${port}...`));
	}
}

export default App;

