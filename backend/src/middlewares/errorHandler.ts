import ErrorStatus from '../utils/ErrorStatus';
import { Request, Response, NextFunction } from 'express';

const errorHandler = (
	err: ErrorStatus, _req: Request, res: Response, _nxt: NextFunction,
) => {
	if (err.status) {
		return res.status(err.status).json({ message: err.message });
	}

	return res.status(500).json({ message: 'Internal server error!' });
};

export default errorHandler;
