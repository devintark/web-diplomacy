const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const mongoose = require("mongoose");


// Load User model
const User = require("../../models/User");
const Game = require("../../models/GameState");
const OrderModels = require("../../models/Order");


router.post("/orders/:id", (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err) {
          console.error(err);
        }
        if (info !== undefined) {
          console.error(info.message);
          res.status(403).send(info.message);
          console.log("hiiiiiiiiiiiiiiiiiii");
        } else {
            
        }
      })(req, res, next);
})