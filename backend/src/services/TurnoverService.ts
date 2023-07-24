import { ErrorMessages, HTTPStatusCode } from '../types';
import { ErrorStatus, Turnover } from '../utils';

class TurnoverService {
	public async getTurnover(email: string) {
		if (!email) {
			throw new ErrorStatus(
				ErrorMessages.BAD_REQUEST,
				HTTPStatusCode.BAD_REQUEST,
			);
		}

		return await new Turnover().getTurnover(email);
	}
}

export default TurnoverService;
