import express from "express";
const router = express.Router();

import { isAuthenticated, isAdmin } from '../middleware/auth'
import businessController from '../controllers/business'

router.get('/scheduler', isAuthenticated, businessController.getBookings);

export default router;