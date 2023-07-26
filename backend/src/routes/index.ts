import { MetricsController } from '../controllers';
import express from 'express';

const router = express.Router();

router.post('/metrics', new MetricsController().getHeadcountAndTurnover);

export default router;
