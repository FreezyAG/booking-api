import express from "express";

import routeNotFound from '../controllers/routeNotFound'

import clientRouter from './client';
import businessRouter from './business';
import commonRouter from './common';

const router = express.Router();

router.use('/client', clientRouter);
router.use('/api', commonRouter);
router.use('/business', businessRouter);

router.use('*', routeNotFound)

export default router;
