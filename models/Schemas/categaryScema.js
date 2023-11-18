const { Sequelize } = require("sequelize");
const database = require("../../Common/dbConnection");

const category = database.define(
  "category",
  {
    catID: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    category: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    defaultValue: Date.now,
  }
);
module.exports = category;
