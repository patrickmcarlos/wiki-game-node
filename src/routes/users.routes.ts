import express from 'express';
import usersController from '../controllers/users.controllers';
const router = express();

/* GET users listing. */
export const usersRouter = router.get('/', usersController.get);
