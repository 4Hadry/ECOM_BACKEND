const { models } = require("../models");
const products = require("../models/Schemas/productSchema");

module.exports = {
  updtProduct: async (ProductId, updateProductData) => {
    // console.log(teacherId);
    const products = await models.products.update(updateProductData, {
      where: {
        Productid: ProductId,
      },
    });
    return products;
  },

  deleteproduct: async (productId) => {
    const products = await models.products.findByPk(productId);
    if (products) {
      products.destroy();
      return "Product Delete Succfully";
    }
    return null;
  },
};
