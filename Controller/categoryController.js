var categoryService = require("../service/categoryService");
var categoryValidation = require("./categoryValidation");

async function categories(req, res, next) {
  res.send(await categoryService.getCategory());
}

async function addCategory(req, res, next) {
  try {
    const { error, value } = categoryValidation.addCategory.validate(req.body);
    if (error) {
      return res.send(error.details[0].message);
    } else {
      const data = await categoryService.addCategory(value);
      console.log(data);
      return res.send(data);
    }
  } catch (error) {
    res.send(error);
  }
}

async function updatedCategory(req, res, next) {
  try {
    const { error, value } = categoryValidation.updatedCategory.validate(
      req.body
    );
    if (error) {
      return res.send(error.details[0].message);
    } else {
      const categoryId = req.params.id;
      const updateCategoryData = req.body;
      const updated = await categoryService.updatedCategory(
        categoryId,
        updateCategoryData,
        value
      );
      res.send(updated);
    }
  } catch (error) {
    res.send(error);
  }
}

async function deleteCategory(req, res, next) {
  try {
    const { error, value } = categoryValidation.deleteCategory.validate(
      req.body
    );
    if (error) {
      return res.send(error.details[0].message);
    } else {
      const categoryId = req.params.id;
      const deleted = await categoryService.deleteCategory(categoryId, value);
      res.send(deleted);
    }
  } catch (error) {
    res.send(error);
  }
}

module.exports = { categories, addCategory, updatedCategory, deleteCategory };
