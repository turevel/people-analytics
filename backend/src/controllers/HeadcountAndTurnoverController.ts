import { HeadcountAndTurnoverService } from '../services';
import { HTTPStatusCode } from '../types';
import { Request, Response } from 'express';

class HeadcountAndTurnoverController {
	public async getHeadcountAndTurnover(req: Request, res: Response) {
		const { email } = req.body;
		const headcount = await new HeadcountAndTurnoverService()
			.getHeadcountAndTurnover(email);
		return res.status(HTTPStatusCode.OK).json(headcount);
	}
}

export default HeadcountAndTurnoverController;
