const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const BoardInfo = require("../client/src/utils/GameInfo");


// Load User model
const User = require("../../models/User");
const Game = require("../../models/GameState");
const OrderModels = require("../../models/Order");


router.post("/:id", (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
        if (err) {
          console.error(err);
        }
        if (info !== undefined) {
          console.error(info.message);
          res.status(403).send(info.message);
        } else {
            let nationsOrders = [];
            for (i = 0; i < req.body.orders.length; i++){
              console.log(req.body.orders[i]);
              const unitOrder = new OrderModels.unitorder({territoryName: req.body.orders[i][0], order: req.body.orders[i][1]});
              nationsOrders.push(unitOrder);
            }
            Game.findOne({gameid: req.params.id}, (err, game) => {
                console.log(nationsOrders);
                const orderid = game.get('currentMoveId');
                OrderModels.orders.findByIdAndUpdate(orderid, {[req.body.country]: nationsOrders }, (err, doc) => console.log(doc));
            })
        }
      })(req, res, next);
})

// router.post("/resolveorders/:id", (req, res, next) => {
//   passport.authenticate('jwt', { session: false }, (err, user, info) => {
//     if (err) {
//       console.error(err);
//     }
//     if (info !== undefined) {
//       console.error(info.message);
//       res.status(403).send(info.message);
//     } else {
//         const doc = await Game.findById(req.params.id);
//         const game  = doc.toObject();
//         const gameArray = Object.entries(game).filter(item => item[1].hasOwnProperty('occupied'));

//     }
//   })(req, res, next);

// });

router.post("/resolveorderstest/:id", (req, res, next) => {
  Game.findOne({gameid: req.params.id}, (err, doc) => {
    const game  = doc.toObject();
    const gameArray = Object.entries(game).filter(item => item[1].hasOwnProperty('occupied') && item[1]['occupied']);
    console.log(gameArray);
    for (var i = 0; i < gameArray.length; i++){
      gameArray[i][0] = BoardInfo[gameArray[i][0]]['abbrev'];
      
    }


  });
  
})


module.exports = router;