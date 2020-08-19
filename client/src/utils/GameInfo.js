module.exports = {
    ankara: {
        supply: true,
        abbrev: "ank",
        domain: "coastal", //inland coastal naval
        adjacent: ["blacksea", "armenia", "smyrna", "constantinople"],
        coordinates: [35.419922, 40.480381]
    },
    belgium: {
        supply: true,
        abbrev: "bel",
        domain: "coastal",
        adjacent: ["holland", "ruhr", "northsea", "englishchannel", "picardy", "burgundy"],
        coordinates: [4.658203, 50.555325] // force is army or fleet 
    },
    berlin: {
        supply: true, 
        abbrev: "ber",
        domain: "coastal", 
        adjacent: ["kiel", "balticsea", "prussia", "silesia", "munich"],
        coordinates: [13.007813, 53.592505]
    },
    brest: {
        supply: true, 
        abbrev: "bre",
        domain: "coastal",
        adjacent: ["paris", "picardy", "englishchannel", "midatlantic", "gascony"],
        coordinates: [-1.362305, 47.945786]
    },
    budapest: {
        supply:  true, 
        abbrev: "bud",
        domain: "inland",
        adjacent: ["galicia", "rumania", "trieste", "vienna", "serbia"],
        coordinates: [21.51123, 46.815099]
    },
    bulgaria: {
        supply: true, 
        abbrev:"bul",
        domain:  "inland",
        adjacent:  ["rumania", "serbia", "constantinople", "greece"],
        coordinates: [26.004639, 42.85986]
    },
    bulgariaec: { 
        abbrev: "bulec",
        domain:  "naval",
        adjacent:  ["blacksea", "rumania", "constantinople"],
        coordinates: [27.575684, 42.85986]
    },
    bulgariasc: { 
        abbrev: "bulsc",
        domain: "naval",
        adjacent: ["aegeansea", "greece", "constantinople"],
        coordinates: [25.499268, 40.996484]
    },
    constantinople: {
        supply: true, 
        abbrev:  "con",
        domain: "coastal",
        adjacent: ["bulgaria", "bulgariaec", "bulgariasc", "smyrna", "ankara", "blacksea", "aegeansea"],
        coordinates: [29.509277, 40.979898]
    },
    denmark: {
        supply: true, 
        abbrev: "den",
        domain:  "coastal",
        adjacent: ["northsea", "sweden", "kiel", "balticsea", "skagerrak", "heligolandbight"],
        coordinates: [9.360352, 56.14555]
    },
    edinburgh: {
        supply:  true, 
        abbrev:  "edi",
        domain: "coastal",
        adjacent: ["yorkshire", "northsea", "norwegiansea", "clyde", "liverpool"],
        coordinates:  [-3.218994, 57.21366]
    },
    greece: {
        supply:  true, 
        abbrev:  "gre",
        domain:  "coastal",
        adjacent: ["bulgaria", "bulgariasc", "ioniansea", "serbia", "albania", "aegeansea"],
        coordinates: [-3.218994, 57.21366]
    },
    holland: {
        supply:  true, 
        abbrev: "hol",
        domain: "coastal",
        adjacent: ["heligolandbight", "northsea", "ruhr", "kiel", "belgium"],
        coordinates: [5.877686, 52.321911]
    },
    kiel: {
        supply: true, 
        abbrev:  "kie",
        domain: "coastal",
        adjacent: ["holland", "ruhr", "munich", "heligolandbight", "denmark", "balticsea", "berlin"],
        coordinates: [8.931885, 52.676382]
    },
    liverpool: {
        supply: true, 
        abbrev: "lvp",
        domain: "coastal",
        adjacent: ["clyde", "irishsea", "northatlantic", "yorkshire", "edinburgh", "wales"],
        coordinates: [-2.767548, 54.322931]
    },
    london: {
        supply: true, 
        abbrev: "lon",
        domain: "coastal",
        adjacent: ["york", "wales", "englishchannel", "northsea"],
        coordinates: [0.087891, 52.113252]
    },
    marseilles: {
        supply: true, 
        abbrev:  "mar",
        domain: "coastal",
        adjacent: ["burgandy", "gascony", "gulfoflyon", "piedmont", "spain", "spainnc", "spainsc"],
        coordinates:  [4.63623, 44.41024]
    },
    moscow: {
        supply: true, 
        abbrev: "mos",
        domain: "inland",
        adjacent: ["stpetersburg", "sevastopol", "ukraine", "warsaw", "livonia"],
        coordinates: [30.761719, 54.342149]
    },
    munich: {
        supply:  true, 
        abbrev:  "mun",
        domain:  "inland",
        adjacent: ["ruhr", "kiel", "silesia", "berlin", "tyrolia", "bohemia", "burgundy"],
        coordinates: [9.909668, 49.382373]
    },
    naples: {
        supply: true, 
        abbrev:  "nap",
        domain:  "coastal",
        adjacent:  ["rome", "apulia", "ioniansea", "tyrrheniansea"],
        coordinates: [15.413818, 40.354917]  
    },
    norway: {
        supply: true, 
        abbrev: "nor",
        domain: "coastal",
        adjacent: ["norwegiansea", "sweden", "barentssea", "skagerrak", "saintpetersburg", "northsea"],
        coordinates: [8.393555, 60.844911]
    },
    paris: {
        supply: true, 
        abbrev: "par",
        domain: "inland",
        adjacent: ["picardy", "brest", "burgundy", "gascony"],
        coordinates: [1.318359, 47.813155]
    },
    portugal: {
        supply: true, 
        abbrev: "por",
        domain: "coastal",
        adjacent:  ["spain", "spainnc", "spainsc", "midatlantic"],
        coordinates: [1.318359, 47.813155]
    },
    rome: {
        supply: true, 
        abbrev: "rom",
        domain: "coastal",
        adjacent: ["apulia", "naples", "tuscany", "venice", "tyrrheniansea"],
        coordinates: [12.139893, 42.334184]
    },
    rumania: {
        supply: true, 
        abbrev: "rum",
        domain: "coastal",
        adjacent: ["budapest", "galicia", "sevastapol", "ukraine", "bulgaria", "bulgariaec", "serbia", "blacksea"],
        coordinates: [27.246094, 45.02695]
    },
    stpetersburg: {
        supply:  true, 
        abbrev: "stp",
        domain:  "inland",
        adjacent:  ["moscow", "finland", "livonia", "norway"],
        coordinates: [35.727539, 61.564574]
    },
    stpetersburgnc: { 
        abbrev:  "stp",
        domain: "naval",
        adjacent: ["barentssea", "norway"],
        coordinates: [35.727539, 61.564574]
    },
    stpetersburgsc: { 
        abbrev: "stp",
        domain: "naval",
        adjacent: ["finland", "gulfofbothnia", "livonia"],
        coordinates: [29.11624, 60.027014]
    },
    serbia: {
        supply: true, 
        abbrev: "ser",
        domain: "inland",
        adjacent:  ["bulgaria", "rumania", "budapest", "trieste", "albania", "greece"],
        coordinates: [21.269531, 43.428988]
    },
    sevastapol: {
        supply:  true, 
        abbrev:  "sev",
        domain:  "coastal",
        adjacent: ["blacksea", "moscow", "ukraine", "rumania", "armenia"],
        coordinates: [35.332031, 47.783635]
    },
    smyrna: {
        supply: true, 
        abbrev: "smy",
        domain: "coastal",
        adjacent: ["eastmed", "aegeansea", "syria", "armenia", "ankara", "constantinople"],
        coordinates: [29.553223, 37.675125]
    },
    spain: {
        supply: true, 
        abbrev: "spa",
        domain: "inland",
        adjacent: ["portugal", "gascony", "marseilles"],
        coordinates: [-4.196777, 38.85682]
    },
    spainnc: { 
        abbrev: "spa",
        domain: "naval",
        adjacent: ["portugal", "midatlantic", "gascony"],
        coordinates: [-5.075684, 43.181147]
    },
    spainsc: { 
        abbrev: "spa",
        domain: "naval",
        adjacent: ["portugal", "gulfoflyon", "westmed", "midatlantic"],
        coordinates: [-0.142822, 38.741231]
    },
    sweden: {
        supply: true, 
        abbrev: "swe",
        domain: "coastal",
        adjacent: ["norway", "finland", "gulfofbothnia", "skagerrak", "denmark", "balticsea"],
        coordinates: [14.501953, 59.734253]
    },
    trieste: {
        supply: true, 
        abbrev: "tri",
        domain: "coastal",
        adjacent: ["budapest", "vienna", "tyrolia", "serbia", "albania", "venice", "adriaticsea"],
        coordinates: [16.875, 44.339565]
    },
    tunis: {
        supply: true, 
        abbrev: "tun",
        domain: "coastal",
        adjacent: ["northafrica", "tyrrheniansea", "westmed", "ioniansea "],
        coordinates: [8.811035, 35.119909]
    },
    venice: {
        supply: true, 
        abbrev: "ven",
        domain: "coastal",
        adjacent: ["trieste", "tyrolia", "piedmont", "adriaticsea", "tuscany", "rome", "apulia"],
        coordinates: [11.634521, 44.84808]
    },
    vienna: {
        supply: true, 
        abbrev: "vie",
        domain: "inland",
        adjacent: ["budapest", "galicia", "bohemia", "tyrolia", "triest"],
        coordinates: [17.260566, 48.922499]
    },
    warsaw: {
        supply: true, 
        abbrev: "war",
        domain: "inland",
        adjacent: ["ukraine", "livonia", "moscow", "galicia", "silesia", "prussia"],
        coordinates: [22.642822, 52.389011]
    },
    clyde: {
        supply: false, 
        abbrev: "cly",
        domain: "coastal",
        adjacent: ["edinburgh", "norwegiansea", "northatlantic", "liverpool"],
        coordinates: [-5.19104, 56.641127]
    },
    yorkshire: {
        supply: false, 
        abbrev:  "yor",
        domain: "coastal",
        adjacent: ["edinburgh", "london", "liverpool", "wales", "northsea"],
        coordinates: [-0.736084, 53.252069]
    },
    wales: {
        supply:  false, 
        abbrev: "wal",
        domain: "coastal",
        adjacent: ["yorkshire", "irishsea", "englishchannel", "london", "liverpool"],
        coordinates: [-3.35083, 52.059246]
    },
    picardy: {
        supply: false, 
        abbrev: "pic",
        domain: "coastal",
        adjacent: ["belgium", "paris", "brest", "englishchannel", "burgundy"],
        coordinates: [2.054443, 49.759978]
    },
    gascony: {
        supply: false, 
        abbrev:  "gas",
        domain: "coastal",
        adjacent: ["spain", "spainnc", "brest", "paris", "burgundy", "marseilles", "midatlantic"],
        coordinates: [0.41748, 44.894796]
    },
    burgundy: {
        supply: false, 
        abbrev: "bur",
        domain: "inland",
        adjacent: ["ruhr", "belgium", "munich", "paris", "picardy", "gascony", "marseilles"],
        coordinates: [4.515381, 47.554287]

    },
    northafrica: {
        supply: false, 
        abbrev: "naf",
        domain: "coastal",
        adjacent: ["midatlantic", "westmed", "tunis"],
        coordinates: [0.087891, 34.524661]
    },
    ruhr: {
        supply: false, 
        abbrev: "ruh",
        domain: "inland",
        adjacent: ["kiel", "holland", "belgium", "munich", "burgundy"],
        coordinates: [7.294922, 50.666872]
    },
    prussia: {
        supply: false, 
        abbrev: "pru",
        domain:"coastal",
        adjacent: ["livonia", "warsaw", "silenia", "berlin", "balticsea"],
        coordinates: [17.841797, 53.644638]
    },
    silesia: {
        supply: false, 
        abbrev: "sil",
        domain: "inland",
        adjacent: ["prussia", "warsaw", "berlin", "galicia", "munich", "bohemia"],
        coordinates: [17.885742, 51.917168]
    },
    piedmont: {
        supply: false, 
        abbrev: "pie",
        domain: "coastal",
        adjacent: ["venice", "tuscany", "tyrolia", "marseilles", "gulfoflyon"],
        coordinates: [7.910156, 44.746733]
    },
    tuscany: {
        supply: false, 
        abbrev: "tus",
        domain:  "coastal",
        adjacent: ["venice", "piedmont", "rome", "gulfoflyon", "tyrrheniansea"],
        coordinates: [10.859985, 43.858297]
    },
    apulia: {
        supply: false, 
        abbrev: "apu",
        domain: "coastal",
        adjacent: ["naples", "venice", "rome", "adriaticsea", "ioniansea"],
        coordinates: [15.46875, 41.47566]
    },
    tyrolia: {
        supply: false, 
        abbrev: "tyr",
        domain: "inland",
        adjacent:["munich", "bohemia", "vienna", "trieste", "piedmont", "venice"],
        coordinates: [12.304688, 46.935261]
    },
    galicia: {
        supply: false, 
        abbrev: "gal",
        domain: "inland",
        adjacent: ["warsaw", "ukraine", "rumania", "budapest", "vienna", "bohemia", "silesia"],
        coordinates: [24.389648, 49.553726]
    },
    bohemia: {
        supply: false, 
        abbrev: "boh",
        domain: "inland",
        adjacent: ["vienna", "tyrolia", "munich", "galicia", "silesia"],
        coordinates: [15.13916, 50.261254]
    },
    finland: {
        supply: false, 
        abbrev: "fin",
        domain: "coastal",
        adjacent: ["stpetersburg", "stpetersburgsc", "norway", "sweden", "gulfofbothnia"],
        coordinates: [25.576172, 62.390369]
    },
    livonia: {
        supply: false, 
        abbrev: "liv",
        domain: "coastal",
        adjacent: ["balticsea", "gulfofbothnia", "stpetersburg", "stpetersburgsc", "moscow", "warsaw", "prussia"],
        coordinates: [23.90625, 55.9492]
    },
    ukraine: {
        supply: false, 
        abbrev: "ukr",
        domain: "inland",
        adjacent: ["sevastopol", "rumania", "galicia", "warsaw", "moscow"],
        coordinates: [29.509277, 49.510944]
    },
    albania: {
        supply: false, 
        abbrev: "alb",
        domain: "coastal",
        adjacent: ["serbia", "greece", "trieste", "adriaticsea", "ioniansea"],
        coordinates: [20.083008, 40.647304]
    },
    armenia: {
        supply: false, 
        abbrev: "arm",
        domain: "coastal",
        adjacent: ["sevastopol", "blacksea", "syria", "ankara", "smyrna"],
        coordinates: [41.682129, 39.791655]
    },
    syria: {
        supply: false, 
        abbrev: "syr",
        domain: "coastal",
        adjacent: ["smyrna", "armenia", "eastmed"],
        coordinates: [38.254395, 35.227672]
    },
    northatlantic: {
        supply: false, 
        abbrev: "nat",
        domain:  "naval",
        adjacent: ["midatlantic", "clyde", "liverpool", "irishsea"],
        coordinates: [-15.380859, 54.876607]
    },
    midatlantic: {
        supply: false, 
        abbrev: "mid",
        domain: "naval",
        adjacent: ["northatlantic", "irishsea", "englishchannel", "spainnc", "spainsc", "brest", "gascony", "portugal", "northafrica"],
        coordinates: [-14.0625, 42.391009]
    },
    norwegiansea: {
        supply: false, 
        abbrev: "nrg",
        domain: "naval",
        adjacent: ["clyde", "edinburgh", "norway", "northsea", "barentssea", "northatlantic"],
        coordinates: [-1.230469, 63.743631]
    },
    northsea: {
        supply: false, 
        abbrev: "nth",
        domain: "naval",
        adjacent: ["belgium", "holland", "london", "yorkshire", "edinburgh", "norway", "skagerrak", "heligolandbight", "denmark"],
        coordinates: [2.06543, 56.486762]
    },
    englishchannel: {
        supply: false, 
        abbrev: "eng",
        domain: "naval",
        adjacent: ["london", "wales", "irishsea", "midatlantic", "belgium", "picardy", "brest"],
        coordinates: [-2.460938, 49.95122]
    },
    irishsea: {
        supply: false, 
        abbrev: "iri",
        domain:  "naval",
        adjacent: ["englishchannel", "midatlantic", "northatlantic", "liverpool", "wales"],
        coordinates: [-7.954102, 50.247205]
    },
    helgolandbight: {
        supply: false, 
        abbrev: "hel",
        domain: "naval",
        adjacent: ["denmark", "kiel", "holland", "northsea"],
        coordinates: [5.888672, 54.425322]
    },
    skagerrak: {
        supply: false, 
        abbrev: "ska",
        domain: "naval",
        adjacent: ["denmark", "norway", "sweden", "northsea"],
        coordinates: [9.580078, 58.008098]
    },
    balticsea: {
        supply: false, 
        abbrev: "bal",
        domain: "naval",
        adjacent: ["sweden", "denmark", "berlin", "kiel", "livonia", "prussia", "gulfofbothnia"],
        coordinates: [18.369141, 56.072035]
    },
    gulfofbothnia: {
        supply:  false, 
        abbrev: "bot",
        domain: "naval",
        adjacent: ["finland", "sweden", "stpetersburgsc", "livonia", "balticsea"],
        coordinates: [21.09375, 59.355596]
    },
    barentssea: {
        supply:  false, 
        abbrev: "bar",
        domain: "naval",
        adjacent: ["stpetersburgnc", "norwegiansea", "norway"],
        coordinates: [37.792969, 70.568803]
    },
    westmed: {
        supply: false, 
        abbrev: "wes",
        domain: "naval",
        adjacent: ["midatlantic", "spainsc", "northafrica", "gulfoflyon", "tunis", "tyrrheniansea"],
        coordinates: [3.427734, 37.961523]
    },
    gulfoflyon: {
        supply: false, 
        abbrev: "gol",
        domain: "naval",
        adjacent: ["westmed", "spainsc", "marseilles", "piedmont", "tuscany", "tyrrheniansea"],
        coordinates: [5.668945, 41.508577]
    },
    tyrrheniansea: {
        supply: false, 
        abbrev: "tyn",
        domain: "naval",
        adjacent: ["naples", "rome", "tuscany", "ioniansea", "gulfoflyon", "westmed", "tunis"],
        coordinates: [11.99707, 39.53794]
    },
    ioniansea: {
        supply: false, 
        abbrev: "ion",
        domain: "naval",
        adjacent: ["tunis", "tyrrheniansea", "naples", "apulia", "greece", "aegeansea", "albania", "adriaticsea", 'eastmed'],
        coordinates: [17.402344, 35.639441]
    },
    adriaticsea: {
        supply: false, 
        abbrev: "adr",
        domain: "naval",
        adjacent: ["trieste", "vienna", "apulia", "albania", "ioniansea"],
        coordinates: [15.776367, 42.747012]
    },
    aegeansea: {
        supply: false, 
        abbrev: "aeg",
        domain: "naval",
        adjacent: ["constantinople", "smyrna", "bulgariasc", "greece", "eastmed"],
        coordinates: [25.499268, 36.897194]
    },
    eastmed: {
        supply: false, 
        abbrev: "eas",
        domain: "naval",
        adjacent: ["smyrna", "syria", "aegeansea", "ioniansea"],
        coordinates: [29.20166, 34.651285]
    },
    blacksea: {
        supply: false, 
        abbrev: "bla",
        domain: "naval",
        adjacent: ["constantinople", "ankara", "armenia", "sevastapol", "rumania", "bulgariaec"],
        coordinates: [33.991699, 43.261206]
    }
}