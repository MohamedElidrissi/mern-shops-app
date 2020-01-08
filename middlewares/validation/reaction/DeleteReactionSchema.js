const { Joi } = require('celebrate');

const DeleteReactionsSchema = {
  body: Joi.object({
    shopId: Joi.string().required(),
  }),
};

module.exports = DeleteReactionsSchema;
