var cartService = require("../Services/cartService");
var cartValidation = require("./cartValidation");

async function carts(req, res, next) {
  res.send(await cartService.getCart());
}

async function addCart(req, res, next) {
  try {
    const { error, value } = cartValidation.addCart.validate(req.body);
    if (error) {
      return res.send(error.details[0].message);
    } else {
      const data = await cartService.addCart(value);
      console.log(data);
      return res.send(data);
    }
  } catch (error) {
    res.send(error);
  }
}

async function updatedCart(req, res, next) {
  try {
    const { error, value } = cartValidation.updatedCart.validate(req.body);
    if (error) {
      return res.send(error.details[0].message);
    } else {
      const cartId = req.params.id;
      const updateCartData = req.body;
      const updated = await cartService.updatedCart(
        cartId,
        updateCartData,
        value
      );
      res.send(updated);
    }
  } catch (error) {
    res.send(error);
  }
}

async function deleteCart(req, res, next) {
  try {
    const { error, value } = cartValidation.deleteCart.validate(req.body);
    if (error) {
      return res.send(error.details[0].message);
    } else {
      const cartId = req.params.id;
      const deleted = await cartService.deleteCart(cartId, value);
      res.send(deleted);
    }
  } catch (error) {
    res.send(error);
  }
}

module.exports = { carts, addCart, updatedCart, deleteCart };
