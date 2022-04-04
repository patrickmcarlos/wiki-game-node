import express, { NextFunction, Request, Response } from 'express';
import createError from 'http-errors';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { baseRouter, usersRouter } from './src/routes';

require('dotenv').config();

const app = express();

/** EXPRESS SETUP */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/** ROUTES */
app.use('/', baseRouter);
app.use('/users', usersRouter);

/** ERROR HANDLING */
// 404
app.use(function (req: Request, res: Response, next: NextFunction) {
    next(createError(404));
});

// Catch all
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.json('error');
});

/** SERVER SETUP */
app.set('port', process.env.PORT || 6000);

app.listen(app.get('port'), () => {
    console.log(`Express server listening on port ${process.env.PORT}`);
});
