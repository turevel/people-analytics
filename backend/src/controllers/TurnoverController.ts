import { TurnoverService } from '../services';
import { HTTPStatusCode } from '../types';
import { Request, Response } from 'express';

class HeadcountController {
	public async getTurnover(req: Request, res: Response) {
		const { email } = req.body;
		const headcount = await new TurnoverService().getTurnover(email);
		return res.status(HTTPStatusCode.OK).json(headcount);
	}
}

export default HeadcountController;
