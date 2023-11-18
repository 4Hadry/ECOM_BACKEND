const { Sequelize } = require("sequelize");
const database = require("../../Common/dbConnection");

const products = database.define(
  "products",

  {
    Productid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    // category: {
    //   type: Sequelize.STRING,
    //   allowNull: false,
    // },
    rating: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    imageUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    // stock: {
    //   type: Sequelize.INTEGER,
    //   allowNull: false,
    //   defaultValue: 1,
    // },
  },
  {
    timestamps: true,
    paranoid: true,
    defaultValue: Date.now,
  }
);
module.exports = products;
