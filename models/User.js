const mongoose = require('mongoose');
const postSaveErrorHandler = require('../middlewares/mongoose/postSaveErrorHandler');

const modelName = 'User';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.post('save', postSaveErrorHandler.bind(UserSchema, modelName));

module.exports = mongoose.model(modelName, UserSchema);
