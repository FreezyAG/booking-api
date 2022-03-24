import express from "express";
const router = express.Router();

import { isAuthenticated, isAdmin } from '../middleware/auth'
import validate from '../middleware/validator'
import { Booking } from '../schema/booking'

import clientController from '../controllers/client'

router.get('/scheduler', isAuthenticated, clientController.getBookings);
router.post('/booking', validate(Booking), isAuthenticated, isAdmin, clientController.createBooking);
router.delete('/booking/:id', isAuthenticated, isAdmin, clientController.deleteBooking);

export default router;
