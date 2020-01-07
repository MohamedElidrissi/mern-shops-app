const express = require('express');

const AuthRouter = require('./auth');
const LikesRouter = require('./likes');
const DislikesRouter = require('./dislikes');
const ShopsRouter = require('./shops');
const UserRouter = require('./users');

const Router = express.Router();

AuthRouter(Router);
LikesRouter(Router);
DislikesRouter(Router);
ShopsRouter(Router);
UserRouter(Router);

module.exports = Router;
