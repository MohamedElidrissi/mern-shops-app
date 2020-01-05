const express = require('express');

const AuthRouter = require('./auth');
const UserRouter = require('./users');

const Router = express.Router();

AuthRouter(Router);
UserRouter(Router);

module.exports = Router;
