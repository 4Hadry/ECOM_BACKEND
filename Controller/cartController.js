var cartService = require("../Services/cartService");
const catchAsyncError = require("../middleware/catchAsyncError");
// var cartValidation = require("./cartValidation");

const carts = catchAsyncError(async (req, res, next) => {
  res.send(await cartService.getCart());
});

const addCart = catchAsyncError(async (req, res, next) => {
  let data = await req.body;
  // console.log(data);
  const cart = cartService.addCart(data);
  res.send(cart);
});

const updatedCart = catchAsyncError(async (req, res, next) => {
  let cartId = req.params.cartID;
  let updateCartData = req.body;
  const data = cartService.updatedCart(cartId, updateCartData);
  // studentService;
  res.send(data);
});

const deleteCart = catchAsyncError(async (req, res, next) => {
  let cartId = req.params.cartID;
  // console.log(teacherId);
  const newData = cartService.deleteCart(cartId);

  //   let updateUserData = req.body;

  res.send(newData);
});

module.exports = { carts, addCart, updatedCart, deleteCart };
