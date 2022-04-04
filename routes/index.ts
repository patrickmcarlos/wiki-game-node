import express from 'express';
const router = express.Router();

/* GET home page. */
export const indexRouter = router.get('/', function (req, res, next) {
    res.json({ title: 'changes wow!' });
});
