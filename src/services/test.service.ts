import { Test } from '../models';
import { pgClient } from './knex';

export const testQuery = async () =>
    await pgClient<Test>('test').select('id', 'text');
