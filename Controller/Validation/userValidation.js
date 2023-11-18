const joi = require("joi");

module.exports = {
  createUser: joi.object().keys({
    FirstName: joi.string().required(),
    LastName: joi.string(),
    email: joi.string().email().required(),
    password: joi.string().required(),
  }),
  deleteUser: joi.object().keys({
    id: joi.number(),
    email: joi.string().email(),
  }),
  updateUser: joi.object().keys({
    id: joi.number().required(),
    firstName: joi.string(),
    LastName: joi.string(),
    email: joi.string().email(),
    password: joi.string(),
  }),
};
