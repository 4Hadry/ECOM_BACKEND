const database = require("../Common/dbConnection");
const cart = require("./Schemas/cartScheema");
const category = require("./Schemas/categaryScema");
const products = require("./Schemas/productSchema");
const user = require("./Schemas/userSchema");

// user.hasMany(cart, {
//   onDelete: "CASCADE",
//   foreignKey: {
//     name: "userID",
//     allowNull: false,
//     unique: true,
//   },
// });
// cart.belongsTo(user, {
//   onDelete: "CASCADE",
//   foreignKey: {
//     name: "userID",
//     allowNull: false,
//     unique: true,
//   },
// });
const models = database.models;

module.exports = { database, models };
