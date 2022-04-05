import { Request, Response } from 'express';

const get = (req: Request, res: Response) => {
    res.json({ title: 'GET /articles' });
};

export default { get };
