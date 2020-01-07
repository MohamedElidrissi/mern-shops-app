const express = require('express');

const AuthRouter = require('./auth');
const LikesRouter = require('./likes');
const ShopsRouter = require('./shops');
const UserRouter = require('./users');

const Router = express.Router();

AuthRouter(Router);
LikesRouter(Router);
ShopsRouter(Router);
UserRouter(Router);

module.exports = Router;
