import express, { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { baseRouter, articlesRouter, testRouter } from './src/routes';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

/** EXPRESS SETUP */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/** CORS */
const clientUrl = process.env.CLIENT_BASE_URL ?? 'http://localhost:3000';
const allowedOrigins = [clientUrl];
const corsOptions: cors.CorsOptions = {
    origin: allowedOrigins,
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', clientUrl);
    next();
});

/** ROUTES */
app.use('/', baseRouter);
app.use('/articles', articlesRouter);
app.use('/test', testRouter);

/** ERROR HANDLING */
// 404
app.use(function (req: Request, res: Response, next: NextFunction) {
    next(createError(404));
});

// Catch all
app.use(function (err: any, req: Request, res: Response) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.json('error');
});

/** SERVER SETUP */
app.set('port', process.env.PORT || 6001);

app.listen(app.get('port'), () => {
    console.log({ allowedOrigins });
    console.log(`Express server listening on port ${process.env.PORT}`);
});
