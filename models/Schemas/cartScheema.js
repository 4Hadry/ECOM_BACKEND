const { Sequelize } = require("sequelize");
const database = require("../../Common/dbConnection");

const cart = database.define(
  "cart",
  {
    catID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    defaultValue: Date.now,
  }
);
module.exports = cart;
