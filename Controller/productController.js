const ProductService = require("../Services/ProductService");
const products = require("../models/Schemas/productSchema");

// Create Products
exports.createProducts = async (req, res, next) => {
  const product = await products.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
};

// Get Products
exports.getAllProducts = async (req, res) => {
  const Products = await products.findAll();
  res.status(200).json({
    success: true,
    Products,
  });
};

// Update Products
exports.UpdateProducts = async (req, res) => {
  let productID = req.params.Productid;
  let updateProductData = req.body;
  const data = ProductService.updtProduct(productID, updateProductData);
  res.send(data);
};

exports.deleteProducts = async (req, res) => {
  let productId = req.params.Productid;
  // console.log(teacherId);
  const newData = ProductService.deleteproduct(productId);

  //   let updateUserData = req.body;

  res.send(newData);
};
