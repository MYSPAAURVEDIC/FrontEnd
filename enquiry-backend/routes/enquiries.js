import express from 'express';
const router = express.Router();
import { SaveQuery } from "../controllers/query_controller.js";

router.post('/save',SaveQuery)

export default router
