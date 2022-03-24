import express from "express";
const router = express.Router();

import { isAuthenticated, isAdmin } from '../middleware/auth'
import commonController from '../controllers/common'

router.get('/users', isAuthenticated, commonController.getUsers);
router.get('/agents', isAuthenticated, isAdmin, commonController.getUsers);

export default router;
