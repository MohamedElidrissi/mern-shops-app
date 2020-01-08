const express = require('express');

const AuthRouter = require('./auth');
const ReactionRouter = require('./reactions');
const ShopRouter = require('./shops');
const UserRouter = require('./users');

const Router = express.Router();

AuthRouter(Router);
ReactionRouter(Router);
ShopRouter(Router);
UserRouter(Router);

module.exports = Router;
