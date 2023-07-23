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
	}

	start(port: number) {
		this.app
			.listen(port, () => console.log(`API rodando na porta ${port}...`));
	}
}

export default App;

