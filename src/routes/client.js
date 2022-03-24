import express from "express";
const router = express.Router();

import { isAuthenticated, isAdmin } from '../middleware/auth'
import clientController from '../controllers/client'

router.get('/scheduler', isAuthenticated, clientController.getBookings);
router.post('/booking', isAuthenticated, isAdmin, clientController.getBookings);
router.delete('/booking/:id', isAuthenticated, isAdmin, clientController.deleteBooking);

export default router;
