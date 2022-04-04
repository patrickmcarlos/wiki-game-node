import { Request, Response } from 'express';

const get = (req: Request, res: Response) => {
    res.json({ title: 'GET /' });
};

export default { get };
