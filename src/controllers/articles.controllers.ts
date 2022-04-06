import { Request, Response } from 'express';
import { getRandomArticle } from '../services/articles.service';

const get = async (req: Request, res: Response) => {
    const articles = await getRandomArticle();
    res.json(articles);
};

export default { get };
