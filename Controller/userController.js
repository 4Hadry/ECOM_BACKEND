const userService = require("../Services/userService");
const catchAsyncError = require("../middleware/catchAsyncError");
const userValidation = require("./Validation/userValidation");

const MyUser = catchAsyncError(async (req, res, next) => {
  // res.send("UserControler");
  const userData = await userService.getUser();

  res.send(userData);
});

// const userData = (req, res) => {
//   const user = userService.getUser();
//   res.send(user);
// };
const addUser = catchAsyncError(async (req, res) => {
  const { error, value } = userValidation.createUser.validate(req.body);
  const user = await userService.creatUser(req.body);
  res.send(user);
  return user;
});
const UpdateUser = (req, res) => {
  let userId = req.params.Userid;
  let updateUserData = req.body;
  const data = userService.updtUser(userId, updateUserData);

  res.send(data);
};

const delUserr = (req, res) => {
  let userId = req.params.Userid;
  console.log(userId);
  const newData = userService.deleteUser(userId);

  //   let updateUserData = req.body;

  res.send(newData);
};

module.exports = {
  MyUser,
  addUser,
  UpdateUser,
  delUserr,
};
