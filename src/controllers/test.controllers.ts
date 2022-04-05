import { Request, Response } from 'express';
import { testQuery } from '../services/test.service';

const get = async (req: Request, res: Response) => {
    const response = await testQuery();
    res.json(response);
};

export default { get };
