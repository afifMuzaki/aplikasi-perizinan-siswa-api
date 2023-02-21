const { request, response } = require("express");
const jwt = require("jsonwebtoken");
// const UserModel = require("../models/users");
const dotenv = require("dotenv").config();
const jwtSecret = process.env.ACCESS_TOKEN_SECRET;
const jwtRefresh = process.env.REFRESH_TOKEN_SECRET;
const db = require('../models');
const userModel = db.Users;

class Auth {
  async login(req = request, res = response) {
    const { username, password } = req.body;
    try {
      const userData = await userModel.findAll({
        attributes: ['kredensial', 'username', 'role'],
        where: {
            username: username,
            password: password,
        }
      });

      let userKredensial = userData[0].kredensial;
      let userName = userData[0].username;
      let userRole = userData[0].role;

      const accessToken = jwt.sign({ userKredensial, userName, userRole }, 
      jwtSecret, {
          expiresIn: "15m",
        }
      );
      const refreshToken = jwt.sign({ userKredensial, userName, userRole },jwtRefresh, {
          expiresIn: "1d",
        }
      );

      await userModel.update({ refresh_token: refreshToken }, {
        where: {
          kredensial: userKredensial
        }
      });

      res.cookie("refreshToken", refreshToken, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      res.json({ message: "Selamat Datang!", accessToken });
    } catch (err) {
      res.status(404).json({ message: "User tidak ditemukan!" });
      console.log(err);
    }

  }

  async logout(req = request, res = response) {
    const { refreshToken } = req.cookies;

    if(!refreshToken) return res.sendStatus(204);

    const user = await userModel.findAll({
        attributes: ['kredensial', 'refresh_token'],
        where: {
          refresh_token: refreshToken
        }
    });

    if(!user[0]) return res.sendStatus(204);
    const userKredensial = user[0].kredensial;
    
    await userModel.update({ refresh_token: null }, {
        where: {
            kredensial: userKredensial
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
  }

  async refreshToken(req = request, res = response) {
    try {
      const { refreshToken } = req.cookies;
      if(!refreshToken) return res.sendStatus(401);

      const user = await userModel.findAll({
        where: {
          refresh_token: refreshToken
        }
      });
      if(!user[0]) return res.sendStatus(403);

      jwt.verify(refreshToken, jwtRefresh, (err, decoded) => {
        if(err) return res.sendStatus(403);
        const userKredensial = user[0].kredensial;
        const userName = user[0].username;
        const userRole = user[0].role;
        const accessToken = jwt.sign({ userKredensial, userName, userRole }, jwtSecret, {
          expiresIn: '10m'
        });
        res.json({ accessToken });
      });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = Auth;
