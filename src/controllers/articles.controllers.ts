import { Request, Response } from 'express';
import { getRandomArticles } from '../services/articles.service';

const get = async (req: Request, res: Response) => {
    const numArticles = req.query.num ? Number(req.query.num) : undefined;

    const articles = await getRandomArticles(numArticles);
    res.json(articles);
};

export default { get };
