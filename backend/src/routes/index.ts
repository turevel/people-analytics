import { HeadcountAndTurnoverController } from '../controllers';
import express from 'express';

const router = express.Router();

router.post('/metrics', new HeadcountAndTurnoverController().getHeadcountAndTurnover);

export default router;
