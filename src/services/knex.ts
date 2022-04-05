import { knex, Knex } from 'knex';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const knexConfig: Knex.Config = {
    client: 'pg',
    connection: {
        host: process.env.PG_BASE_URL,
        port: Number(process.env.PG_PORT),
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        database: process.env.PG_DATABASE,
    },
};

export const pgClient = knex(knexConfig);
