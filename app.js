const dotenv = require('dotenv');
const express = require('express');
const logger = require('morgan');
const debug = require('debug')('mern-shops-app:server');
const cors = require('cors');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const requireJsonContentType = require('./middlewares/requireJsonContentType');

dotenv.config();

const Router = require('./routes/');

const app = express();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.once('open', () => debug('Connected to MongoDB!'));
db.on('error', debug.bind(debug, 'Could not connect to MongoDB:'));

app.use(logger('dev'));
app.use(cors());
app.use(express.json());

// Require application/json Content-Type
app.post('/api/v1/*', requireJsonContentType);

app.use('/api/v1/', Router);

// Handle errors thrown by celebrate
app.use(errors());

// Handle any errors left
app.use((err, req, res, next) => {
  if (!err) next();

  res.status(err.status || 500).json({ message: err.message });
});

module.exports = app;
