import express from 'express';
import testController from '../controllers/test.controllers';
const router = express();

/* GET test */
export const testRouter = router.get('/', testController.get);
