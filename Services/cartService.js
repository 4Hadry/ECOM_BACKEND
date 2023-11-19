const { models } = require("../models");

module.exports = {
  getCart: async () => {
    const carts = await models.cart.findAll({ include: models.user });
    return carts;
  },
  addCart: async (data) => {
    const carts = await models.cart.create(data);
    console.log(carts);
    return carts;
  },

  updatedCart: async (cartId, updateCartData) => {
    const carts = await models.cart.findByPk(cartId);
    if (carts) {
      carts.update(updateCartData);
    }
    return carts;
  },

  deleteCart: async (cartId) => {
    const carts = await models.cart.findByPk(cartId);
    if (carts) {
      carts.destroy();
      return "CART DELETED SUCCESSFULLY";
    }
    return null;
  },
};
