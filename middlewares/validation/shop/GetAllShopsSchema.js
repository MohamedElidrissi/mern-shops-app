const { Joi } = require('celebrate');

const GetAllShopsSchema = {
  query: Joi.object({
    page: Joi.number().default(1),
    per_page: Joi.number().default(20),
    long: Joi.number().required(),
    lat: Joi.number().required(),
  }),
};

module.exports = GetAllShopsSchema;
