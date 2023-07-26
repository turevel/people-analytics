import { EmployeeModel } from '../database/models';
import { ErrorMessages, HTTPStatusCode } from '../types';
import { ErrorStatus, HeadcountAndTurnover } from '../utils';

class HeadcountAndTurnoverController {
	public async getHeadcountAndTurnover(email: string) {
		if (!email) {
			throw new ErrorStatus(
				ErrorMessages.BAD_REQUEST,
				HTTPStatusCode.BAD_REQUEST,
			);
		}

		const emailAlreadyExists = await EmployeeModel.findOne({ where: { email } });

		if (!emailAlreadyExists) {
			throw new ErrorStatus(
				ErrorMessages.EMAIL_NOT_FOUND,
				HTTPStatusCode.NOT_FOUND,
			);
		}

		return await new HeadcountAndTurnover().getHeadcountAndTurnover(email);
	}
}

export default HeadcountAndTurnoverController;
