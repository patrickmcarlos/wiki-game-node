import express from 'express';
import baseController from '../controllers/base.controllers';
const router = express();

/* GET home page. */
export const baseRouter = router.get('/', baseController.get);
