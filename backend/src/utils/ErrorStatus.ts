import { ErrorMessages, HTTPStatusCode } from '../types';

class ErrorStatus extends Error {
	constructor(message: ErrorMessages, public status: HTTPStatusCode) {
		super(message);
	}
}

export default ErrorStatus;
