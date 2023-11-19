const database = require("../Common/dbConnection");
const cart = require("./Schemas/cartScheema");
const category = require("./Schemas/categaryScema");
const products = require("./Schemas/productSchema");
const user = require("./Schemas/userSchema");

user.hasMany(cart, { onDelete: "CASCADE", foreignKey: { name: "userID" } });
cart.belongsTo(user, { onDelete: "CASCADE", foreignKey: { name: "userID" } });

category.hasMany(products, {
  onDelete: "CASCADE",
  foreignKey: { name: "categoryID" },
});
products.belongsTo(category, {
  onDelete: "CASCADE",
  foreignKey: { name: "categoryID" },
});

products.belongsToMany(cart, {
  through: "product_cart",
  foreignKey: { name: "productID" },
});
cart.belongsToMany(products, {
  through: "product_cart",
  foreignKey: { name: "cartID" },
});
const models = database.models;

module.exports = { database, models };
