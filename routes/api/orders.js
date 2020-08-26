const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
const BoardInfo = require("../../client/src/utils/GameInfo");
var axios = require('axios');

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
  let unitsObj = null;
  let ordersObj = null;
  let supplyCenterObj = null;
  let dislodgedsObj = {};
  let dislodgersObj = {};
  let bouncesObj = {};
  let resolutionsObj = {};
  Game.findOne({gameid: req.params.id}, (err, doc) => {
    const season = doc.get('Season');
    const year = doc.get('Year');
    const type = doc.get('Type');
    const game  = doc.toObject();
    const gameArray = Object.entries(game).filter(item => item[1].hasOwnProperty('occupied') && item[1]['occupied']);
    let supCenterArray = [];
    for (var i = 0; i < gameArray.length; i++ ){
      if (BoardInfo[gameArray[i][0]]['supply']){
        supCenterArray.push([BoardInfo[gameArray[i][0]]['abbrev'], gameArray[i][1]['occupier']['country']])
      }
    }
    supplyCenterObj = Object.fromEntries(new Map(supCenterArray));
    console.log(supplyCenterObj);
    let dislodged = doc.get('dislodgeds');
    let dislodgedArray = []
    for (var i = 0; i < dislodged.length; i++){
        dislodgedArray.push([ dislodged[i]['territoryName'], Object.fromEntries(new Map([ ["Type", dislodged[i]["Type"]], ["Nation", dislodged[i]['Nation']] ]))]);
    }
    dislodgedsObj = Object.fromEntries(new Map(dislodgedArray))
    let dislodgers = doc.get('dislodgers');
    dislodgersObj = Object.fromEntries(new Map(dislodgers));

    let bounces = doc.get('bounces');
    let bouncesArray = [];
    for (var i = 0; i < bounces.length; i++){
      let subBounceArray = [];
      for (var j = 0; j < bounces[i]["bouncers"].length; j++){
          subBounceArray.push([bounces[i]['bouncers'][j], true ])
      }
      bouncesArray.push([ bounces[i]['territory'], Object.fromEntries(new Map(subBounceArray))])
    }
    bouncesObj = Object.fromEntries(new Map(bouncesArray))

    for (var i = 0; i < gameArray.length; i++){
      gameArray[i][0] = BoardInfo[gameArray[i][0]]['abbrev'];
      var obj = Object.fromEntries(new Map([["Type", gameArray[i][1]['occupier']['force']], ["Nation", gameArray[i][1]['occupier']['country']]]));
      gameArray[i][1] = obj;
    }
    unitsObj = Object.fromEntries(new Map(gameArray));
    console.log(JSON.stringify(unitsObj));
    OrderModels.orders.findById(doc.get('currentMoveId'), (err, orders) => {
      const ordersArray = Object.entries(orders.toObject()).filter(item => item[0] !== '_id' && item[0] !== '__v');
      console.log(ordersArray[0][1]);
      for (var i=0; i < ordersArray.length; i++){
        var countryOrderArray = []
        for (var j = 0; j < ordersArray[i][1].length; j++){
          countryOrderArray.push( [ ordersArray[i][1][j]['territoryName'], ordersArray[i][1][j]['order'] ] ) 
        }
        var obj = Object.fromEntries(new Map(countryOrderArray));
        ordersArray[i][1] = obj;
      }
      ordersObj = Object.fromEntries(new Map(ordersArray));
      const apiData = JSON.stringify(Object.fromEntries(new Map ( [ ["Season", season], ["Year", year], ["Type", type], 
                                                                    ["Units", unitsObj], ["SupplyCenters", supplyCenterObj], ["Dislodgeds", dislodgedsObj],
                                                                    ["Dislodgers", dislodgersObj], ["Bounces", bouncesObj], ["Orders", ordersObj], ["Resolutions", {}]])));
      console.log(apiData);
      var config = {
        method: 'post',
        url: 'http://godip-adjudication.appspot.com/Classical',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : apiData
      };
      
      axios(config)
      .then(function (response) {
        console.log(response.data);
        doc.set('Year', 1902);
        doc.save();

      })
      .catch(function (error) {
        console.log(error);
      });
      
    })

  });
  
  
})


module.exports = router;