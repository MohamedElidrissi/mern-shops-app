const { Joi } = require('celebrate');

const GetReactionsSchema = {
  query: Joi.object({
    type: Joi.string()
      .equal('LIKE', 'DISLIKE')
      .uppercase()
      .required(),
  }),
};

module.exports = GetReactionsSchema;
