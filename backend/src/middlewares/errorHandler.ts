import { ErrorMessages, HTTPStatusCode } from '../types';
import { ErrorStatus } from '../utils';
import { Request, Response, NextFunction } from 'express';

const errorHandler = (
	err: ErrorStatus,
	_rq: Request,
	res: Response,
	_nt: NextFunction,
) => {
	if (err.status) {
		return res.status(err.status).json({ message: err.message });
	}

	return res
		.status(HTTPStatusCode.INTERNAL_SERVER_ERROR)
		.json({ message: ErrorMessages.INTERNAL_SERVER_ERROR });
};

export default errorHandler;
