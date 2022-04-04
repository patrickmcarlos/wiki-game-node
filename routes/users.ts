import express from 'express';
const router = express();

/* GET users listing. */
export const usersRouter = router.get('/', function (req, res, next) {
    res.json({ title: 'respond with a resources' });
});
