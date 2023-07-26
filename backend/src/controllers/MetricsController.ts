import { MetricsService } from '../services';
import { HTTPStatusCode } from '../types';
import { Request, Response } from 'express';

class MetricsController {
	public async getHeadcountAndTurnover({ body: { email } }: Request, res: Response) {
		const metrics = await new MetricsService().getHeadcountAndTurnover(email);
		return res.status(HTTPStatusCode.OK).json(metrics);
	}
}

export default MetricsController;
