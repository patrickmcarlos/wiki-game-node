import express from 'express';
import articlesController from '../controllers/articles.controllers';
const router = express();

/* GET articles listing. */
export const articlesRouter = router.get('/', articlesController.get);
