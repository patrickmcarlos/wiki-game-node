"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRouter = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
/* GET users listing. */
exports.usersRouter = router.get('/users', function (req, res, next) {
    res.send('respond with a resource');
});
