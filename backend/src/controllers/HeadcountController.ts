import HeadcountService from '../services/HeadcountService';
import HTTPStatusCode from '../types/HTTPStatusCode';
import { Request, Response } from 'express';

class HeadcountController {
	public async getHeadcount(req: Request, res: Response) {
		const { email } = req.body;
		const headcount = await new HeadcountService().getHeadcount(email);
		return res.status(HTTPStatusCode.OK).json(headcount);
	}
}

export default HeadcountController;
