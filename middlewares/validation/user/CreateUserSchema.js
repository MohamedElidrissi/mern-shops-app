const { Joi } = require('celebrate');

const CreateUserSchema = {
  body: Joi.object({
    username: Joi.string().required(),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(6)
      .required(),
  }),
};

module.exports = CreateUserSchema;
