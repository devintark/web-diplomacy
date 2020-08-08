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
                subscribedgames = [];
                User.findById(user.id).then(doc => {
                  subscribedgames = doc.get('games');
                  if (subscribedgames.includes(req.params.id) == false ){
                    User.findByIdAndUpdate(user.id, {$push: {games: req.params.id}}).then(doc => res.json(doc)).catch(err => console.log(err));
                  } 
                });
              } else {
                  const orders_id = new mongoose.Types.ObjectId;
                  const firstOrders = new OrderModels.orders({_id: orders_id});
                  const orderspromise = firstOrders.save();
                  const newGame = new Game({
                                            gameid: req.params.id, 
                                            currentMoveId: orders_id
                                          });                        
                  newGame
                      .save()
                      .catch(err => console.log(err));
                  // const unitorder = new OrderModels.unitorder({order: ["bel", "hold"]});
                  // const nationalorder = new OrderModels.nationalorder({territoryname: "lon", orders: unitorder });
                  // console.log(unitorder);
                  // console.log(nationalorder);
                  // orderspromise.then(xxx => OrderModels.orders.findOneAndUpdate({_id: orders_id}, {$push: {France: nationalorder}}).then(doc => console.log(doc.get('France'))));
                  User.findByIdAndUpdate(user.id, {$push: {games: req.params.id}}).then(doc => res.json(doc)).catch(err => console.log(err));
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

module.exports = router;