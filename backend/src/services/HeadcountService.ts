import { ErrorMessages, HTTPStatusCode } from '../types';
import { ErrorStatus, Headcount } from '../utils';

class HeadcountService {
	public async getHeadcount(email: string) {
		if (!email) {
			throw new ErrorStatus(
				ErrorMessages.BAD_REQUEST,
				HTTPStatusCode.BAD_REQUEST,
			);
		}

		return await new Headcount().getHeadcount(email);
	}
}

export default HeadcountService;
