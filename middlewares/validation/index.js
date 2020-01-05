const { celebrate } = require('celebrate');

const CreateUserSchema = require('./user/CreateUserSchema');

module.exports = {
  createUserValidator: celebrate(CreateUserSchema),
};
