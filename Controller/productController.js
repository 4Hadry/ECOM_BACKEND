const ProductService = require("../Services/ProductService");
const catchAsyncError = require("../middleware/catchAsyncError");
const { models } = require("../models");
const products = require("../models/Schemas/productSchema");

// Create Products
exports.createProducts = catchAsyncError(async (req, res, next) => {
  const product = await products.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

// Get Products
exports.getAllProducts = catchAsyncError(async (req, res) => {
  const Products = await models.products.findAll({ include: models.category });
  res.status(200).json({
    success: true,
    Products,
  });
});
exports.getSingleProduct = catchAsyncError(async (req, res) => {
  const productID = req.params.Productid;
  const Product = await models.products.findByPk(productID);
  res.status(200).json({
    success: true,
    Product,
  });
});
// Update Products
exports.UpdateProducts = catchAsyncError(async (req, res) => {
  let productID = req.params.Productid;
  let updateProductData = req.body;
  const data = ProductService.updtProduct(productID, updateProductData);
  res.send(data);
});

exports.deleteProducts = catchAsyncError(async (req, res) => {
  let productId = req.params.Productid;
  // console.log(teacherId);
  const newData = ProductService.deleteproduct(productId);

  //   let updateUserData = req.body;

  res.send(newData);
});
