import express from "express";
const router = express.Router();

import { isAuthenticated, isAdmin } from '../middleware/auth'
import businessController from '../controllers/business'

/* GET home page. */
router.get('/scheduler', isAuthenticated, businessController.getBookings);

export default router;