import { HeadcountController, TurnoverController } from '../controllers';
import express from 'express';

const router = express.Router();

router.post('/headcount', new HeadcountController().getHeadcount);
router.post('/turnover', new TurnoverController().getTurnover);

export default router;
