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
                console.log("About to check passcode...");
                if (game.get('passcode') === req.body.passcode){
                  console.log("Passcode is good!");
                  subscribedgames = [];
                  User.findById(user.id).then(doc => {
                    subscribedgames = doc.get('games');
                    if (subscribedgames.includes(req.params.id) == false ){
                      console.log("Ddidn't find game, adding");
                      console.log(subscribedgames);
                      User.findByIdAndUpdate(user.id, {$push: {games: req.params.id}}).exec();
                    } 
                    playersArr = game.get('players');
                    playersArr.push(user.email);
                    console.log(playersArr);
                    Game.updateOne({gameid: req.params.id}, {players: playersArr}).exec(); 
                  });
                }   
              } 
          });
      }
    })(req, res, next);
});

router.post("/creategame", (req, res, next) => {
  console.log("hi");
  pass = req.body.passcode;
  hostId = req.body.userId;
  player = req.body.userEmail;
  Game.find({}).sort('-gameid').limit(1).exec((err, game) => {
    newgameid = game[0].get('gameid') + 1;
    const orders_id = new mongoose.Types.ObjectId;
    const firstOrders = new OrderModels.orders({_id: orders_id});
    firstOrders.save();
    const newGame  = new Game({
                                gameid: newgameid, 
                                passcode: pass,
                                host: hostId,
                                players: [player],
                                currentMoveId: orders_id
                              });
    newGame.save().catch(err => console.log(err));
    User.findByIdAndUpdate(hostId, {$push: {games: newgameid }}).catch(err => console.log(err));
  })
});

router.post("/assignplayer", (req, res, next) => {
  console.log("hi");
  const country = req.body.country;
  const player = req.body.player;
  const game = req.body.game;
  const key = 'assignments.' + country;
  console.log(country);
  console.log(player);
  console.log(game);
  console.log(key);
  Game.findOneAndUpdate({gameid: game}, {[key]: player}, {new: true}, (err, doc) => {
    console.log(doc);
    res.json(doc);
  })
});

module.exports = router;