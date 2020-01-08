const { Joi } = require('celebrate');

const CreateReactionSchema = {
  body: Joi.object({
    shopId: Joi.string().required(),
    type: Joi.string()
      .equal('LIKE', 'DISLIKE')
      .uppercase(),
  }),
};

module.exports = CreateReactionSchema;
