const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");


// Load User model
const User = require("../../models/User");
const Game = require("../../models/GameState")

// @route POST api/users/register
// @desc Register user
// @access Public
router.get("/:id", (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err) {
          console.error(err);
        }
        if (info !== undefined) {
          console.error(info.message);
          res.status(403).send(info.message);
          console.log("hiiiiiiiiiiiiiiiiiii");
        } else {
            Game.findOne({ gameid: req.params.id }).then(game => {
                if (game) { 
                    res.json(game);
                } else {
                    const newGame = new Game({gameid: req.params.id});
                    newGame
                        .save()
                        .then(game => res.json(game))
                        .catch(err => console.log(err));
                }
            });
        }
      })(req, res, next);
});

router.post("/joingame/:id", (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err) {
        console.error(err);
      }
      if (info !== undefined) {
        console.error(info.message);
        res.status(403).send(info.message);
        console.log("hiiiiiiiiiiiiiiiiiii");
      } else {
          Game.findOne({ gameid: req.params.id }).then(game => {
              if (game) {
                subscribedgames = [];
                User.findById(user.id).then(doc => {
                  subscribedgames = doc.get('games');
                  if (subscribedgames.includes(req.params.id) == false ){
                    User.findByIdAndUpdate(user.id, {$push: {games: req.params.id}}).then(doc => res.json(doc)).catch(err => console.log(err));
                  } 
                });
              } else {
                  const newGame = new Game({gameid: req.params.id});
                  newGame
                      .save()
                      .catch(err => console.log(err));
                  User.findByIdAndUpdate(user.id, {$push: {games: req.params.id}}).then(doc => res.json(doc)).catch(err => console.log(err));
              }
          });
      }
    })(req, res, next);
});

module.exports = router;