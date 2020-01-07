const mongoose = require('mongoose');
const postSaveErrorHandler = require('../middlewares/mongoose/postSaveErrorHandler');

const { ObjectId } = mongoose.SchemaTypes;

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
  shops: [
    {
      shopId: {
        type: ObjectId,
        ref: 'Shop',
      },
      status: {
        type: String,
        enum: ['liked', 'disliked'],
      },
    },
  ],
});

UserSchema.post('save', postSaveErrorHandler.bind(UserSchema, modelName));

module.exports = mongoose.model(modelName, UserSchema);
