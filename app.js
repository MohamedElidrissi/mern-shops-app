const dotenv = require('dotenv');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const Router = require('./routes/');

dotenv.config();

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());

app.use('/api/v1/', Router);

module.exports = app;
