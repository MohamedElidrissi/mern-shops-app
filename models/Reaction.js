const mongoose = require('mongoose');
const postSaveErrorHandler = require('../middlewares/mongoose/postSaveErrorHandler');

const { ObjectId } = mongoose.SchemaTypes;

const modelName = 'Reaction';

const ReactionSchema = new mongoose.Schema(
  {
    userId: {
      type: ObjectId,
      ref: 'User',
    },
    shopId: {
      type: ObjectId,
      ref: 'Shop',
    },
    type: {
      type: String,
      enum: ['LIKE', 'DISLIKE'],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  { id: false, toJSON: { virtuals: true } }
);

ReactionSchema.virtual('shop', {
  ref: 'Shop',
  localField: 'shopId',
  foreignField: '_id',
  justOne: true,
});

// Don't allow duplicate reactions of the same user, shop and type
ReactionSchema.index({ userId: 1, shopId: 1, type: 1 }, { unique: true });

// Auto remove dislike reactions after 2 hours
ReactionSchema.index(
  { createdAt: 1 },
  { expireAfterSeconds: 3600 * 2, partialFilterExpression: { type: 'DISLIKE' } }
);

ReactionSchema.post(
  'save',
  postSaveErrorHandler.bind(ReactionSchema, modelName)
);

module.exports = mongoose.model(modelName, ReactionSchema);
