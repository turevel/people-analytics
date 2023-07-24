import ErrorMessages from '../types/ErrorMessages';
import HTTPStatusCode from '../types/HTTPStatusCode';
import ErrorStatus from '../utils/ErrorStatus';
import Headcount from '../utils/Headcount';

class HeadcountService {
	public async getHeadcount(email: string) {
		const headcount = await new Headcount().getHeadcount(email);

		if (headcount.length === 0) {
			throw new ErrorStatus(
				ErrorMessages.EMAIL_NOT_FOUND,
				HTTPStatusCode.NOT_FOUND,
			);
		}

		return headcount;
	}
}

export default HeadcountService;
