const { models } = require("../models");

module.exports = {
  getCategory: async () => {
    const categories = await models.category.findAll();
    return categories;
  },
  addCategory: async (data) => {
    const categories = await models.category.create(data);
    console.log(categories);
    return categories;
  },

  updatedCategory: async (categoryId, updateCategoryData) => {
    const categories = await models.category.findByPk(categoryId);
    if (categories) {
      categories.update(updateCategoryData);
    }
    return categories;
  },

  deleteCategory: async (categoryId) => {
    const categories = await models.category.findByPk(categoryId);
    if (categories) {
      categories.destroy();
      return "CATEGORY DELETED SUCCESSFULLY";
    }
    return null;
  },
};
