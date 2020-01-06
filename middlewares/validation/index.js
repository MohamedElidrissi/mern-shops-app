const { celebrate } = require('celebrate');

const CreateUserSchema = require('./user/CreateUserSchema');
const AuthenticateUserSchema = require('./user/AuthenticateUserSchema');

module.exports = {
  createUserValidator: celebrate(CreateUserSchema),
  authenticateUserValidator: celebrate(AuthenticateUserSchema),
};
