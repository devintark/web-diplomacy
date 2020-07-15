const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const GameSchema = new Schema({
    gameid: {
        type: Number,
        default: 1
    },
    players: {type: [String]},
    turn: {
      type: Number,
      default: 1
    },
    ankara: {
        supply: {type: Boolean, default: true},
        abbrev: {type: String, default: "ank"},
        domain: {type: String, default: "coastal"}, //inland coastal naval
        owner: {type: String, default: "Turkey"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Turkey"}, force: {type: String, default: "fleet" }}, //force is army or fleet
        adjacent: {type: [String], default: ["blacksea", "armenia", "smyrna", "constantinople"]} 
    },
    belgium: {
        supply: {type: Boolean, default: true},
        abbrev: {type: String, default: "bel"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }},
        adjacent: {type: [String], default: ["holland", "ruhr", "northsea", "englishchannel", "picardy", "burgundy"]} // force is army or fleet 
    },
    berlin: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "ber"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "Germany"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Germany"}, force: {type: String, default: "Army" }}, // force is army or fleet 
        adjacent: {type: [String], default: ["kiel", "balticsea", "prussia", "silesia", "munich"]} 
    },
    brest: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "bre"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "France"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "France"}, force: {type: String, default: "Fleet" }}, // force is army or fleet
        adjacent: {type: [String], default: ["paris", "picardy", "englishchannel", "midatlantic", "gascony"]}
    },
    budapest: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "bud"},
        domain: {type: String, default: "land"},
        owner: {type: String, default: "Austria"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Austria"}, force: {type: String, default: "Army" }}, // force is army or fleet
        adjacent: {type: [String], default: ["galicia", "rumania", "trieste", "vienna", "serbia"]}
    },
    bulgaria: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "bul"},
        domain: {type: String, default: "inland"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["rumania", "serbia", "constantinople", "greece"]}
    },
    bulgariaec: { 
        abbrev: {type: String, default: "bulec"},
        domain: {type: String, default: "naval"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["blacksea", "rumania", "constantinople"]}
    },
    bulgariasc: { 
        abbrev: {type: String, default: "bulsc"},
        domain: {type: String, default: "naval"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["aegeansea", "greece", "constantinople"]}
    },
    constantinople: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "con"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "Turkey"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Turkey"}, force: {type: String, default: "Army" }}, // force is army or fleet
        adjacent: {type: [String], default: ["bulgaria", "bulgariaec", "bulgariasc", "smyrna", "ankara", "blacksea", "aegeansea"]}
    },
    denmark: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "den"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["northsea", "sweden", "kiel", "balticsea", "skagerrak", "heligolandbight"]}
    },
    edinburgh: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "edi"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "England"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "England"}, force: {type: String, default: "Fleet" }}, // force is army or fleet
        adjacent: {type: [String], default: ["york", "northsea", "norwegiansea", "clyde", "liverpool"]}
    },
    greece: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "gre"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["bulgaria", "bulgariasc", "ioniansea", "serbia", "albania", "aegeansea"]}
    },
    holland: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "hol"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["heligolandbight", "northsea", "ruhr", "kiel", "belgium"]}
    },
    kiel: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "kie"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "Germany"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Germany"}, force: {type: String, default: "Fleet" }}, // force is army or fleet
        adjacent: {type: [String], default: ["holland", "ruhr", "munich", "heligolandbight", "denmark", "balticsea", "berlin"]}
    },
    liverpool: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "lvp"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "England"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "England"}, force: {type: String, default: "Army" }}, // force is army or fleet
        adjacent: {type: [String], default: ["clyde", "irishsea", "northatlantic", "york", "edinburgh", "wales"]}
    },
    london: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "lon"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "England"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "England"}, force: {type: String, default: "Fleet" }}, // force is army or fleet
        adjacent: {type: [String], default: ["york", "wales", "englishchannel", "northsea"]}
    },
    marseilles: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "mar"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "France"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "France"}, force: {type: String, default: "Army" }}, // force is army or fleet
        adjacent: {type: [String], default: ["burgandy", "gascony", "gulfoflyon", "piedmont", "spain", "spainnc", "spainsc"]}
    },
    moscow: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "mos"},
        domain: {type: String, default: "inland"},
        owner: {type: String, default: "Russia"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Russia"}, force: {type: String, default: "Army" }}, // force is army or fleet
        adjacent: {type: [String], default: ["stpetersburg", "sevastopol", "ukraine", "warsaw", "livonia"]}
    },
    munich: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "mun"},
        domain: {type: String, default: "inland"},
        owner: {type: String, default: "Germany"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Germany"}, force: {type: String, default: "Army" }}, // force is army or fleet
        adjacent: {type: [String], default: ["ruhr", "kiel", "silesia", "berlin", "tyrolia", "bohemia", "burgundy"]}
    },
    naples: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "nap"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "Italy"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Italy"}, force: {type: String, default: "Fleet" }}, // force is army or fleet
        adjacent: {type: [String], default: ["rome", "apulia", "ioniansea", "tyrrheniansea"]}
    },
    norway: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "nor"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["norwegiansea", "sweden", "barentssea", "skagerrak", "saintpetersburg", "northsea"]}
    },
    paris: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "par"},
        domain: {type: String, default: "inland"},
        owner: {type: String, default: "France"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "France"}, force: {type: String, default: "Army" }}, // force is army or fleet
        adjacent: {type: [String], default: ["picardy", "brest", "burgundy", "gascony"]}
    },
    portugal: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "por"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["spain", "spainnc", "spainsc", "midatlantic"]}
    },
    rome: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "rom"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "Italy"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Italy"}, force: {type: String, default: "Army" }}, // force is army or fleet
        adjacent: {type: [String], default: ["apulia", "naples", "tuscany", "venice", "tyrrheniansea"]}
    },
    rumania: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "rum"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["budapest", "galicia", "sevastapol", "ukraine", "bulgaria", "bulgariaec", "serbia", "blacksea"]}
    },
    stpetersburg: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "stp"},
        domain: {type: String, default: "inland"},
        owner: {type: String, default: "Russia"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["moscow", "finland", "livonia", "norway"]}
    },
    stpetersburgnc: { 
        abbrev: {type: String, default: "stp"},
        domain: {type: String, default: "naval"},
        owner: {type: String, default: "Russia"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["barentssea", "norway"]}
    },
    stpetersburgsc: { 
        abbrev: {type: String, default: "stp"},
        domain: {type: String, default: "naval"},
        owner: {type: String, default: "Russia"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Russia"}, force: {type: String, default: "Fleet" }}, // force is army or fleet
        adjacent: {type: [String], default: ["finland", "gulfofbothnia", "livonia"]}
    },
    serbia: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "ser"},
        domain: {type: String, default: "inland"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["bulgaria", "rumania", "budapest", "trieste", "albania", "greece"]}
    },
    sevastapol: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "sev"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "Russia"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Russia"}, force: {type: String, default: "Fleet" }}, // force is army or fleet
        adjacent: {type: [String], default: ["blacksea", "moscow", "ukraine", "rumania", "armenia"]}
    },
    smyrna: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "smy"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "Turkey"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Turkey"}, force: {type: String, default: "Army" }}, // force is army or fleet
        adjacent: {type: [String], default: ["eastmed", "aegeansea", "syria", "armenia", "ankara", "constantinople"]}
    },
    spain: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "spa"},
        domain: {type: String, default: "inland"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["portugal", "gascony", "marseilles"]}
    },
    spainnc: { 
        abbrev: {type: String, default: "spa"},
        domain: {type: String, default: "naval"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["portugal", "midatlantic", "gascony"]}
    },
    spainsc: { 
        abbrev: {type: String, default: "spa"},
        domain: {type: String, default: "naval"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["portugal", "gulfoflyon", "westmed", "midatlantic"]}
    },
    sweden: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "swe"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["norway", "finland", "gulfofbothnia", "skagerrak", "denmark", "balticsea"]}
    },
    trieste: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "tri"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "Austria"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Austria"}, force: {type: String, default: "Fleet" }}, // force is army or fleet
        adjacent: {type: [String], default: ["budapest", "vienna", "tyrolia", "serbia", "albania", "venice", "adriaticsea"]}
    },
    tunis: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "tun"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["northafrica", "tyrrheniansea", "westmed", "ioniansea "]}
    },
    venice: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "ven"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "Italy"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Italy"}, force: {type: String, default: "Army" }}, // force is army or fleet
        adjacent: {type: [String], default: ["trieste", "tyrolia", "piedmont", "adriaticsea", "tuscany", "rome", "apulia"]}
    },
    vienna: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "vie"},
        domain: {type: String, default: "inland"},
        owner: {type: String, default: "Austria"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Austria"}, force: {type: String, default: "Army" }}, // force is army or fleet
        adjacent: {type: [String], default: ["budapest", "galicia", "bohemia", "tyrolia", "triest"]}
    },
    warsaw: {
        supply: {type: Boolean, default: true}, 
        abbrev: {type: String, default: "war"},
        domain: {type: String, default: "inland"},
        owner: {type: String, default: "Russia"},
        occupied: {type: Boolean, default: true},
        occupier: {country: {type: String, default: "Russia"}, force: {type: String, default: "Army" }}, // force is army or fleet
        adjacent: {type: [String], default: ["ukraine", "livonia", "moscow", "galicia", "silesia", "prussia"]}
    },
    clyde: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "cly"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "England"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["edinburgh", "norwegiansea", "northatlantic", "liverpool"]}
    },
    yorkshire: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "yor"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "England"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["edinburgh", "london", "liverpool", "wales", "northsea"]}
    },
    wales: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "wal"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "England"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["yorkshire", "irishsea", "englishchannel", "london", "liverpool"]}
    },
    picardy: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "pic"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "France"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["belgium", "paris", "brest", "englishchannel", "burgundy"]}
    },
    gascony: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "gas"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "France"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["spain", "spainnc", "brest", "paris", "burgundy", "marseilles", "midatlantic"]}
    },
    burgundy: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "bur"},
        domain: {type: String, default: "inland"},
        owner: {type: String, default: "France"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["ruhr", "belgium", "munich", "paris", "picardy", "gascony", "marseilles"]}
    },
    northafrica: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "naf"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["midatlantic", "westmed", "tunis"]}
    },
    ruhr: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "ruh"},
        domain: {type: String, default: "inland"},
        owner: {type: String, default: "Germany"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["kiel", "holland", "belgium", "munich", "burgundy"]}
    },
    prussia: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "pru"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "Germany"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["livonia", "warsaw", "silenia", "berlin", "balticsea"]}
    },
    silesia: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "sil"},
        domain: {type: String, default: "inland"},
        owner: {type: String, default: "Germany"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["prussia", "warsaw", "berlin", "galicia", "munich", "bohemia"]}
    },
    piedmont: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "pie"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "Italy"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["venice", "tuscany", "tyrolia", "marseilles", "gulfoflyon"]}
    },
    tuscany: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "tus"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "Italy"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["venice", "piedmont", "rome", "gulfoflyon", "tyrrheniansea"]}
    },
    apulia: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "apu"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "Italy"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["naples", "venice", "rome", "adriaticsea", "ioniansea"]}
    },
    tyrolia: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "tyr"},
        domain: {type: String, default: "inland"},
        owner: {type: String, default: "Austria"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["munich", "bohemia", "vienna", "trieste", "piedmont", "venice"]}
    },
    galicia: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "gal"},
        domain: {type: String, default: "inland"},
        owner: {type: String, default: "Austria"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["warsaw", "ukraine", "rumania", "budapest", "vienna", "bohemia", "silesia"]}
    },
    bohemia: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "boh"},
        domain: {type: String, default: "inland"},
        owner: {type: String, default: "Austria"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["vienna", "tyrolia", "munich", "galicia", "silesia"]}
    },
    finland: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "fin"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "Russia"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["stpetersburg", "stpetersburgsc", "norway", "sweden", "gulfofbothnia"]}
    },
    livonia: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "liv"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "Russia"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["balticsea", "gulfofbothnia", "stpetersburg", "stpetersburgsc", "moscow", "warsaw", "prussia"]}
    },
    ukraine: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "ukr"},
        domain: {type: String, default: "inland"},
        owner: {type: String, default: "Russia"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["sevastopol", "rumania", "galicia", "warsaw", "moscow"]}
    },
    albania: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "alb"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["serbia", "greece", "trieste", "adriaticsea", "ioniansea"]}
    },
    armenia: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "arm"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "Turkey"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["sevastopol", "blacksea", "syria", "ankara", "smyrna"]}
    },
    syria: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "syr"},
        domain: {type: String, default: "coastal"},
        owner: {type: String, default: "Turkey"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["smyrna", "armenia", "eastmed"]}
    },
    northatlantic: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "nat"},
        domain: {type: String, default: "naval"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["midatlantic", "clyde", "liverpool", "irishsea"]}
    },
    midatlantic: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "mid"},
        domain: {type: String, default: "naval"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["northatlantic", "irishsea", "englishchannel", "spainnc", "spainsc", "brest", "gascony", "portugal", "northafrica"]}
    },
    norwegiansea: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "nrg"},
        domain: {type: String, default: "naval"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["clyde", "edinburgh", "norway", "northsea", "barentssea", "northatlantic"]}
    },
    northsea: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "nth"},
        domain: {type: String, default: "naval"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["belgium", "holland", "london", "yorkshire", "edinburgh", "norway", "skagerrak", "heligolandbight", "denmark"]}
    },
    englishchannel: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "eng"},
        domain: {type: String, default: "naval"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["london", "wales", "irishsea", "midatlantic", "belgium", "picardy", "brest"]}
    },
    irishsea: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "iri"},
        domain: {type: String, default: "naval"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["englishchannel", "midatlantic", "northatlantic", "liverpool", "wales"]}
    },
    heligolandbight: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "hel"},
        domain: {type: String, default: "naval"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["denmark", "kiel", "holland", "northsea"]}
    },
    skagerrak: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "ska"},
        domain: {type: String, default: "naval"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["denmark", "norway", "sweden", "northsea"]}
    },
    balticsea: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "bal"},
        domain: {type: String, default: "naval"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["sweden", "denmark", "berlin", "kiel", "livonia", "prussia", "gulfofbothnia"]}
    },
    gulfofbothnia: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "bot"},
        domain: {type: String, default: "naval"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["finland", "sweden", "stpetersburgsc", "livonia", "balticsea"]}
    },
    barentssea: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "bar"},
        domain: {type: String, default: "naval"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["stpetersburgnc", "norwegiansea", "norway"]}
    },
    westmed: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "wes"},
        domain: {type: String, default: "naval"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["midatlantic", "spainsc", "northafrica", "gulfoflyon", "tunis", "tyrrheniansea"]}
    },
    gulfoflyon: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "gol"},
        domain: {type: String, default: "naval"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["westmed", "spainsc", "marseilles", "piedmont", "tuscany", "tyrrheniansea"]}
    },
    tyrrheniansea: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "tyn"},
        domain: {type: String, default: "naval"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["naples", "rome", "tuscany", "ioniansea", "gulfoflyon", "westmed", "tunis"]}
    },
    ioniansea: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "ion"},
        domain: {type: String, default: "naval"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["tunis", "tyrrheniansea", "naples", "apulia", "greece", "aegeansea", "albania", "adriaticsea", 'eastmed']}
    },
    adriaticsea: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "adr"},
        domain: {type: String, default: "naval"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["trieste", "vienna", "apulia", "albania", "ioniansea"]}
    },
    aegeansea: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "aeg"},
        domain: {type: String, default: "naval"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["constantinople", "smyrna", "bulgariasc", "greece", "eastmed"]}
    },
    eastmed: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "eas"},
        domain: {type: String, default: "naval"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["smyrna", "syria", "aegeansea", "ioniansea"]}
    },
    blacksea: {
        supply: {type: Boolean, default: false}, 
        abbrev: {type: String, default: "bla"},
        domain: {type: String, default: "naval"},
        owner: {type: String, default: "None"},
        occupied: {type: Boolean, default: false},
        occupier: {country: {type: String, default: "None"}, force: {type: String, default: "None" }}, // force is army or fleet
        adjacent: {type: [String], default: ["constantinople", "ankara", "armenia", "sevastapol", "rumania", "bulgariaec"]}
    }

});

module.exports = mongoose.model("gamestate", GameSchema);