const { Joi } = require('celebrate');

const AuthenticateUserSchema = {
  body: Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string().required(),
  }),
};

module.exports = AuthenticateUserSchema;
