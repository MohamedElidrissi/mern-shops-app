const { celebrate } = require('celebrate');

const CreateUserSchema = require('./user/CreateUserSchema');
const AuthenticateUserSchema = require('./user/AuthenticateUserSchema');
const GetAllShopsSchema = require('./shop/GetAllShopsSchema');

module.exports = {
  createUserValidator: celebrate(CreateUserSchema),
  authenticateUserValidator: celebrate(AuthenticateUserSchema),
  getAllShopsValidator: celebrate(GetAllShopsSchema),
};
