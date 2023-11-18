const { DataTypes } = require("sequelize");
const database = require("../../Common/dbConnection");
const user = database.define(
  "user",
  {
    Userid: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
      validate: { isEmail: true },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    paranoid: true,
  }
);
module.exports = user;
