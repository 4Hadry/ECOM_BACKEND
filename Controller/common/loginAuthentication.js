const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../../config");
const { models } = require("../../models");
const catchAsyncError = require("../../middleware/catchAsyncError");

let token = [];
const generateToken = (data) => {
  return jwt.sign(data, config.jwtSecret);
};

module.exports = {
  veriftToken: (req, res, next) => {
    let token = req.headers["authorization"];
    token = token && token.split(" ")[1];
    if (!token) {
      return res.sendStatus(403);
    } else {
      if (!token.includes(token)) {
        return res.sendStatus(401);
      }
      jwt.verify(token, config.jwtSecret, (err, user) => {
        if (err) {
          return res.sendStatus(403);
          console.log(user);
        }
        next();
        //  else {
        //   console.log(user);
        //   req.user = user;
        //   return res.sendStatus(200);
        // }
      });
    }
  },

  login: catchAsyncError(async (req, res) => {
    const { email, password } = req.body;
    let user = await models.user.findOne({ where: { email: email } });
    user = user.dataValues;
    console.log(user);
    if (user && (await bcrypt.compare(password, user.password))) {
      const Token = generateToken({ id: user.id });
      token.push(Token);
      return res.json({ Token: Token });
    } else {
      return res.send("Invalid password");
    }
  }),
  register: catchAsyncError(async (req, res) => {
    const { email, password, name } = req.body;

    // Check if user already exists with the given email
    const existingUser = await models.user.findOne({ where: { email: email } });
    if (existingUser) {
      return res.status(400).send({ message: "Email already exists" });
    }

    // Create a new user object
    const newUser = {
      FirstName,
      email,
      password: await bcrypt.hash(password, 10),
    };

    // Save the new user to the database
    await models.user.create(newUser);

    // Generate a token for the newly registered user
    const Token = generateToken({ id: newUser.id });

    // Send the token as response
    return res.json({ Token: Token });
  }),
};
