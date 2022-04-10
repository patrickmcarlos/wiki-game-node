import { Request, Response } from 'express';

const get = (req: Request, res: Response) => {
    res.json({ title: 'Welcome to the The Wiki Game Server!' });
};

export default { get };
