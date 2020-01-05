const express = require('express');

const UserRouter = require('./users');

const Router = express.Router();

UserRouter(Router);

module.exports = Router;
