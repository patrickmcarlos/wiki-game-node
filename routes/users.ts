import express from 'express';
const router = express.Router();

/* GET users listing. */
export const usersRouter = router.get('/users', function (req, res, next) {
    res.send('respond with a resource');
});
