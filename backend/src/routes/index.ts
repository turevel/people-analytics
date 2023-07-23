import express, { Request, Response } from 'express';

const data1 = [
	{
		id: 1,
		data: [
			{ x: '01-2021', y: 5 },
			{ x: '02-2021', y: 7 },
			{ x: '03-2022', y: 12 },
			{ x: '04-2022', y: 11 },
			{ x: '05-2023', y: 10 },
			{ x: '06-2023', y: 13 },
			{ x: '07-2023', y: 14 },
			{ x: '08-2023', y: 2 },
			{ x: '09-2023', y: 15 },
			{ x: '10-2023', y: 15 },
			{ x: '11-2023', y: 17 },
			{ x: '12-2023', y: 8 },
		],
	},
];

const router = express.Router();

router.post('/headcount', (_req: Request, res: Response) => {
	return res.status(200).json(data1);
});

router.post('/turnover', (_req: Request, res: Response) => {
	return res.status(200).json(data1);
});

export default router;
