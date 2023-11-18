const { models } = require("../models");
const bcrypt = require("bcryptjs");
module.exports = {
  getUser: async () => {
    const users = await models.user.findAll();
    return users;
  },

  creatUser: async (data) => {
    data.password = bcrypt.hashSync(data.password, 10);
    const users = await models.user.create(data);
    return users;
  },
  updtUser: async (userId, updateUserData) => {
    const users = await models.user.update(updateUserData, {
      where: {
        Userid: userId,
      },
    });
    return users;
  },
  deleteUser: async (userId) => {
    const users = await models.teacher.findOne(userId);
    if (users) {
      users.destroy();
      return "User Delete Succfully";
    }
    return null;
  },
};
