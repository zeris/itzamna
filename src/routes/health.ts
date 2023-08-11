import express from 'express';
const router = express.Router();

router.get("/health", (_req, res) => {
   res.json({ status: "Server working correctly" });
})

export default router;