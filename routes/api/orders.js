const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const BoardInfo = require("../../client/src/utils/GameInfo");
var axios = require('axios');
const mongoose = require("mongoose");

// Load User models
const Game = require("../../models/GameState").gamestateModel;
const DislodgedModel = require("../../models/GameState").dislodgedModel;
const DislodgerModel = require("../../models/GameState").dislodgerModel;
const BounceModel = require("../../models/GameState").bounceModel;

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
    const allTerritories = Object.entries(game).filter(item => item[1].hasOwnProperty('occupied')); 
    let supCenterArray = [];
    for (var i = 0; i < allTerritories.length; i++ ){
      if (BoardInfo[allTerritories[i][0]]['supply'] && allTerritories[i][1]['owner'] !== "None"){
        supCenterArray.push([BoardInfo[allTerritories[i][0]]['abbrev'], allTerritories[i][1]['owner']])
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
      for (var j = 0; j < bounces[i]['bouncers'].length; j++){
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
        adjudication = response.data;
        console.log(adjudication);
        let coastalProvs = {"spa": false, "bul": false, "stp": false};
        doc.set('Season', adjudication['Season']);
        doc.set('Year', adjudication['Year']);
        doc.set('Type', adjudication['Type']);
        const territoryArray = Object.entries(game).filter(item => item[1].hasOwnProperty('occupied'));
        const UnitsAbbrevsArray = Object.keys(adjudication['Units']);
        for (var i = 0; i < territoryArray.length; i++){
            let terr = territoryArray[i][0];
            let abbrev = BoardInfo[terr]['abbrev'];
            if (UnitsAbbrevsArray.includes(abbrev)){   
              console.log(abbrev);
              let nation = adjudication['Units'][abbrev]['Nation'];
              let type = adjudication['Units'][abbrev]['Type'];
              doc.set({[terr] : {
                                'owner': nation, 
                                'occupied': true,
                                'occupier': {'country': nation, 'force': type}
                                }
                      });
              if (abbrev === "stp/sc" || abbrev === "stp/nc"){
                coastalProvs['stp'] == true;
                doc.set({'stpetersburg' : {
                                          'owner': nation, 
                                          'occupied': false,
                                          'occupier': {'country': "None", 'force': "None"}
                                          }
                });
              }
              if (abbrev === "spa/sc" || abbrev === "spa/nc"){
                coastalProvs['spa'] == true;
                doc.set({'spain' : {
                                          'owner': nation, 
                                          'occupied': false,
                                          'occupier': {'country': "None", 'force': "None"}
                                          }
                });
              }
              if (abbrev === "bul/sc" || abbrev === "bul/ec"){
                coastalProvs['bul'] == true;
                doc.set({'bulgaria' : {
                                          'owner': nation, 
                                          'occupied': false,
                                          'occupier': {'country': "None", 'force': "None"}
                                          }
                });
              }
              
            } else {
              //we had to set these because of a coastal occupation, don't discocupy it!
              if ((abbrev ==="spa" || abbrev === "bul" || abbrev === "stp") && coastalProvs[abbrev]){ continue; }
              doc.set({[terr] : {
                                'owner': territoryArray[i][1]['owner'], 
                                'occupied': false,
                                'occupier': {'country': "None", 'force': "None"}
                                }
                      });
            }
        }

        const dislodgeds = adjudication['Dislodgeds'];
        let dislodgedArray = [];
        const dislodgedKeys = Object.keys(dislodgeds);
        for (let i=0; i<dislodgedKeys.length; i++){
          dislodgedArray.push(new DislodgedModel({
            territoryName: dislodgedKeys[i],
            Type: dislodgeds[dislodgedKeys[i]]['Type'],
            Nation: dislodgeds[dislodgedKeys[i]]['Nation']
          }));
        } 
        doc.set('dislodgeds', dislodgedArray);
        
        const dislodgers = adjudication['Dislodgers'];
        const dislodgerKeys = Object.keys(dislodgers);
        let dislodgerArray = [];
        for (let i=0; i < dislodgerKeys.length; i++){
          let key = dislodgerKeys[i];
          let val = dislodgers[key];
          dislodgerArray.push(new DislodgerModel({dislodger: [key, val]}))
        }
        doc.set('dislodgers', dislodgerArray);

        const bounces = adjudication['Bounces'];
        const bounceKeys = Object.keys(bounces);
        let bouncesArray = [];
        for (let i=0; i < bounceKeys.length; i++){
          bouncesArray.push(new BounceModel({territory: bounceKeys[i], 
                                            bouncers: Object.keys(bounces[bounceKeys[i]])
                                            })
                            );
        }
        doc.set('bounces', bouncesArray);
        const new_orders_id = new mongoose.Types.ObjectId;
        const new_orders = new OrderModels.orders({_id: new_orders_id});
        new_orders.save();
        doc.set('currentMoveId', new_orders_id);

        
        doc.save();
        res.json(doc);

      })
      .catch(function (error) {
        console.log(error);
      });
      
    })

  });
  
  
})


module.exports = router;