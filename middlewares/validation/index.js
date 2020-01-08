const { celebrate } = require('celebrate');

const CreateUserSchema = require('./user/CreateUserSchema');
const AuthenticateUserSchema = require('./user/AuthenticateUserSchema');
const GetAllShopsSchema = require('./shop/GetAllShopsSchema');
const CreateReactionSchema = require('./reaction/CreateReactionSchema');
const GetReactionsSchema = require('./reaction/GetReactionsSchema');
const DeleteReactionSchema = require('./reaction/DeleteReactionSchema');

module.exports = {
  createUserValidator: celebrate(CreateUserSchema),
  authenticateUserValidator: celebrate(AuthenticateUserSchema),
  getAllShopsValidator: celebrate(GetAllShopsSchema),
  createReactionValidator: celebrate(CreateReactionSchema),
  getReactionsValidator: celebrate(GetReactionsSchema),
  deleteReactionSchema: celebrate(DeleteReactionSchema),
};
