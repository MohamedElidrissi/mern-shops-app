const express = require('express');

const AuthRouter = require('./auth');
const ShopsRouter = require('./shops');
const UserRouter = require('./users');

const Router = express.Router();

AuthRouter(Router);
ShopsRouter(Router);
UserRouter(Router);

module.exports = Router;
