import ErrorMessages from '../types/ErrorMessages';
import HTTPStatusCode from '../types/HTTPStatusCode';

class ErrorStatus extends Error {
	constructor(message: ErrorMessages, public status: HTTPStatusCode) {
		super(message);
	}
}

export default ErrorStatus;
