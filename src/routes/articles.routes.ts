import express from 'express';
import usersController from '../controllers/users.controllers';
const router = express();

/* GET articles listing. */
export const articlesRouter = router.get('/', usersController.get);
