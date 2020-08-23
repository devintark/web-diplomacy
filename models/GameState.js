const {orders} = require('./Order')

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const GameSchema = new Schema({
    gameid: {
        type: Number,
        default: 1
    },
    passcode: {
        type: String,
        default: ""
    },
    phase: {type: Number, default: 1},
    players: {type: [String]},
    turn: {
      type: Number,
      default: 1
    },
    Year: {type: Number, default: 1901},
    Season: {type: String, default: "Fall"},
    Type: {type: String, default: "Movement"},
    currentMoveId: {type: mongoose.ObjectId, ref: orders},
    host: {type: String},
    assignments: {
        England: {type: String, default: "None"},
        France: {type: String, default: "None"},
        Germany: {type: String, default: "None"},
        Italy: {type: String, default: "None"},
        Austria: {type: String, default: "None"},
        Turkey: {type: String, default: "None"},
        Russia: {type: String, default: "None"}
    },
    ankara: {
        owner: {type: String, default: "Turkey"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Turkey"}, force: {type: String, default: "Fleet" }}, //force is army or fleet
    },
    belgium: {
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }},
    },
    berlin: {
        owner: {type: String, default: "Germany"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Germany"}, force: {type: String, default: "Army" }}, // force is army or fleet 
    },
    brest: {
        owner: {type: String, default: "France"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "France"}, force: {type: String, default: "Fleet" }}, // force is army or fleet
    },
    budapest: {
        owner: {type: String, default: "Austria"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Austria"}, force: {type: String, default: "Army" }}, // force is army or fleet
    },
    bulgaria: {
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    bulgariaec: { 
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet

    },
    bulgariasc: { 
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    constantinople: {
        owner: {type: String, default: "Turkey"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Turkey"}, force: {type: String, default: "Army" }}, // force is army or fleet
    },
    denmark: {
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    edinburgh: {
        owner: {type: String, default: "England"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "England"}, force: {type: String, default: "Fleet" }}, // force is army or fleet
    },
    greece: {
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    holland: {
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    kiel: {
        owner: {type: String, default: "Germany"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Germany"}, force: {type: String, default: "Fleet" }}, // force is army or fleet
    },
    liverpool: {
        owner: {type: String, default: "England"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "England"}, force: {type: String, default: "Army" }}, // force is army or fleet
    },
    london: {
        owner: {type: String, default: "England"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "England"}, force: {type: String, default: "Fleet" }}, // force is army or fleet
    },
    marseilles: {
        owner: {type: String, default: "France"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "France"}, force: {type: String, default: "Army" }}, // force is army or fleet
    },
    moscow: {
        owner: {type: String, default: "Russia"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Russia"}, force: {type: String, default: "Army" }}, // force is army or fleet
    },
    munich: {
        owner: {type: String, default: "Germany"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Germany"}, force: {type: String, default: "Army" }}, // force is army or fleet
    },
    naples: {
        owner: {type: String, default: "Italy"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Italy"}, force: {type: String, default: "Fleet" }}, // force is army or fleet
    },
    norway: {
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    paris: {
        owner: {type: String, default: "France"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "France"}, force: {type: String, default: "Army" }}, // force is army or fleet
    },
    portugal: {
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    rome: {
        owner: {type: String, default: "Italy"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Italy"}, force: {type: String, default: "Army" }}, // force is army or fleet
    },
    rumania: {
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    stpetersburg: {
        owner: {type: String, default: "Russia"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    stpetersburgnc: { 
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    stpetersburgsc: { 
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Russia"}, force: {type: String, default: "Fleet" }}, // force is army or fleet
    },
    serbia: {
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    sevastapol: {
        owner: {type: String, default: "Russia"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Russia"}, force: {type: String, default: "Fleet" }}, // force is army or fleet
    },
    smyrna: {
        owner: {type: String, default: "Turkey"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Turkey"}, force: {type: String, default: "Army" }}, // force is army or fleet
    },
    spain: {
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    spainnc: { 
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    spainsc: { 
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    sweden: {
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    trieste: {
        owner: {type: String, default: "Austria"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Austria"}, force: {type: String, default: "Fleet" }}, // force is army or fleet
    },
    tunis: {
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    venice: {
        owner: {type: String, default: "Italy"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Italy"}, force: {type: String, default: "Army" }}, // force is army or fleet
    },
    vienna: {
        owner: {type: String, default: "Austria"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Austria"}, force: {type: String, default: "Army" }}, // force is army or fleet
    },
    warsaw: {
        owner: {type: String, default: "Russia"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Russia"}, force: {type: String, default: "Army" }}, // force is army or fleet
    },
    clyde: {
        owner: {type: String, default: "England"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    yorkshire: {
        owner: {type: String, default: "England"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    wales: {
        owner: {type: String, default: "England"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    picardy: {
        owner: {type: String, default: "France"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    gascony: {
        owner: {type: String, default: "France"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    burgundy: {
        owner: {type: String, default: "France"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    northafrica: {
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    ruhr: {
        owner: {type: String, default: "Germany"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    prussia: {
        owner: {type: String, default: "Germany"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    silesia: {
        owner: {type: String, default: "Germany"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    piedmont: {
        owner: {type: String, default: "Italy"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    tuscany: {
        owner: {type: String, default: "Italy"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    apulia: {
        owner: {type: String, default: "Italy"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    tyrolia: {
        owner: {type: String, default: "Austria"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    galicia: {
        owner: {type: String, default: "Austria"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    bohemia: {
        owner: {type: String, default: "Austria"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    finland: {
        owner: {type: String, default: "Russia"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    livonia: {
        owner: {type: String, default: "Russia"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    ukraine: {
        owner: {type: String, default: "Russia"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    albania: {
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    armenia: {
        owner: {type: String, default: "Turkey"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    syria: {
        owner: {type: String, default: "Turkey"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    northatlantic: {
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    midatlantic: {
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    norwegiansea: {
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    northsea: {
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    englishchannel: {
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    irishsea: {
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    helgolandbight: {
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    skagerrak: {
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    balticsea: {
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    gulfofbothnia: {
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    barentssea: {
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    westmed: {
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    gulfoflyon: {
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    tyrrheniansea: {
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    ioniansea: {
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    adriaticsea: {
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    aegeansea: {
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    eastmed: {
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    },
    blacksea: {
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
    }
    

});

module.exports = mongoose.model("gamestate", GameSchema);