const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../../config");
const { models } = require("../../models");

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

  login: async (req, res) => {
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
  },
};
