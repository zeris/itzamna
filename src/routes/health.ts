import express from 'express';
import  Health from '../controllers/health';
const router = express.Router();

router.get("/health", Health.healthChecker);

export default router;