const catagoryService = require("../Services/catagoryService");
const catchAsyncError = require("../middleware/catchAsyncError");

const categories = catchAsyncError(async (req, res, next) => {
  res.send(await catagoryService.getCategory());
});

const addCategory = catchAsyncError(async (req, res, next) => {
  let data = await req.body;
  console.log(data);
  const catagory = catagoryService.addCategory(data);
  res.send(catagory);
});

const updatedCategory = catchAsyncError(async (req, res, next) => {
  let catagoryId = req.params.catID;
  let updateCatagoryData = req.body;
  const data = catagoryService.updatedCategory(catagoryId, updateCatagoryData);
  // studentService;
  res.send(data);
});

const deleteCategory = catchAsyncError(async (req, res, next) => {
  let catagoryId = req.params.catID;
  console.log(teacherId);
  const newData = catagoryService.deleteCategory(catagoryId);

  //   let updateUserData = req.body;

  res.send(newData);
});

module.exports = { categories, addCategory, updatedCategory, deleteCategory };
