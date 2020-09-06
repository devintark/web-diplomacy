module.exports = {
    ank: {
        supply: true,
        full: "ankara",
        sentCase: "Ankara",
        domain: "coastal", //inland coastal naval
        adjacent: ["blacksea", "armenia", "smyrna", "constantinople"],
        coordinates: [35.419922, 40.480381]
    },
    bel: {
        supply: true,
        full: "belgium",
        sentCase: "Belgium",
        domain: "coastal",
        adjacent: ["holland", "ruhr", "northsea", "englishchannel", "picardy", "burgundy"],
        coordinates: [4.658203, 50.555325] // force is army or fleet 
    },
    ber: {
        supply: true, 
        full: "berlin",
        sentCase: "Berlin",
        domain: "coastal", 
        adjacent: ["kiel", "balticsea", "prussia", "silesia", "munich"],
        coordinates: [13.007813, 53.592505]
    },
    bre: {
        supply: true, 
        full: "brest",
        sentCase: "Brest",
        domain: "coastal",
        adjacent: ["paris", "picardy", "englishchannel", "midatlantic", "gascony"],
        coordinates: [-1.362305, 47.945786]
    },
    bud: {
        supply:  true, 
        full: "budapest",
        sentCase: "Budapest",
        domain: "inland",
        adjacent: ["galicia", "rumania", "trieste", "vienna", "serbia"],
        coordinates: [21.51123, 46.815099]
    },
    bul: {
        supply: true, 
        full:"bulgaria",
        sentCase: "Bulgaria",
        domain:  "inland",
        adjacent:  ["rumania", "serbia", "constantinople", "greece"],
        coordinates: [26.004639, 42.85986]
    },
    "bul/ec": { 
        full: "bulgariaec",
        sentCase: "Bulgaria E.C.",
        domain:  "naval",
        adjacent:  ["blacksea", "rumania", "constantinople"],
        coordinates: [27.575684, 42.85986]
    },
    "bul/sc": { 
        full: "bulgariasc",
        sentCase: "Bulgaria S.C.",
        domain: "naval",
        adjacent: ["aegeansea", "greece", "constantinople"],
        coordinates: [25.499268, 40.996484]
    },
    con: {
        supply: true, 
        full:  "constantinople",
        sentCase: "Constantinople",
        domain: "coastal",
        adjacent: ["bulgaria", "bulgariaec", "bulgariasc", "smyrna", "ankara", "blacksea", "aegeansea"],
        coordinates: [29.509277, 40.979898]
    },
    den: {
        supply: true, 
        full: "denmark",
        sentCase: "Denmark",
        domain:  "coastal",
        adjacent: ["northsea", "sweden", "kiel", "balticsea", "skagerrak", "heligolandbight"],
        coordinates: [9.360352, 56.14555]
    },
    edi: {
        supply:  true, 
        full:  "edinburgh",
        sentCase: "Edinburgh", 
        domain: "coastal",
        adjacent: ["yorkshire", "northsea", "norwegiansea", "clyde", "liverpool"],
        coordinates:  [-3.218994, 57.21366]
    },
    gre: {
        supply:  true, 
        full:  "greece",
        sentCase: "Greece",
        domain:  "coastal",
        adjacent: ["bulgaria", "bulgariasc", "ioniansea", "serbia", "albania", "aegeansea"],
        coordinates: [-3.218994, 57.21366]
    },
    hol: {
        supply:  true, 
        full: "holland",
        sentCase: "Holland",
        domain: "coastal",
        adjacent: ["heligolandbight", "northsea", "ruhr", "kiel", "belgium"],
        coordinates: [5.877686, 52.321911]
    },
    kie: {
        supply: true, 
        full:  "kiel",
        sentCase: "Kiel",
        domain: "coastal",
        adjacent: ["holland", "ruhr", "munich", "heligolandbight", "denmark", "balticsea", "berlin"],
        coordinates: [8.931885, 52.676382]
    },
    lvp: {
        supply: true, 
        full: "liverpool",
        sentCase: "Liverpool",
        domain: "coastal",
        adjacent: ["clyde", "irishsea", "northatlantic", "yorkshire", "edinburgh", "wales"],
        coordinates: [-2.767548, 54.322931]
    },
    lon: {
        supply: true, 
        full: "london",
        sentCase: "London",
        domain: "coastal",
        adjacent: ["york", "wales", "englishchannel", "northsea"],
        coordinates: [0.087891, 52.113252]
    },
    mar: {
        supply: true, 
        full:  "marseilles",
        sentCase: "Marseilles",
        domain: "coastal",
        adjacent: ["burgandy", "gascony", "gulfoflyon", "piedmont", "spain", "spainnc", "spainsc"],
        coordinates:  [4.63623, 44.41024]
    },
    mos: {
        supply: true, 
        full: "moscow",
        sentCase: "Moscow",
        domain: "inland",
        adjacent: ["stpetersburg", "sevastopol", "ukraine", "warsaw", "livonia"],
        coordinates: [30.761719, 54.342149]
    },
    mun: {
        supply:  true, 
        full:  "munich",
        sentCase: "Munich",
        domain:  "inland",
        adjacent: ["ruhr", "kiel", "silesia", "berlin", "tyrolia", "bohemia", "burgundy"],
        coordinates: [9.909668, 49.382373]
    },
    nap: {
        supply: true, 
        full:  "naples",
        sentCase: "Naples",
        domain:  "coastal",
        adjacent:  ["rome", "apulia", "ioniansea", "tyrrheniansea"],
        coordinates: [15.413818, 40.354917]  
    },
    nor: {
        supply: true, 
        full: "norway",
        sentCase: "Norway",
        domain: "coastal",
        adjacent: ["norwegiansea", "sweden", "barentssea", "skagerrak", "saintpetersburg", "northsea"],
        coordinates: [8.393555, 60.844911]
    },
    par: {
        supply: true, 
        full: "paris",
        sentCase: "Paris",
        domain: "inland",
        adjacent: ["picardy", "brest", "burgundy", "gascony"],
        coordinates: [1.318359, 47.813155]
    },
    por: {
        supply: true, 
        full: "portugal",
        sentCase: "Portugal",
        domain: "coastal",
        adjacent:  ["spain", "spainnc", "spainsc", "midatlantic"],
        coordinates: [-8.129883, 40.195659]
    },
    rom: {
        supply: true, 
        full: "rome",
        sentCase: "Rome",
        domain: "coastal",
        adjacent: ["apulia", "naples", "tuscany", "venice", "tyrrheniansea"],
        coordinates: [12.139893, 42.334184]
    },
    rum: {
        supply: true, 
        full: "rumania",
        sentCase: "Rumania",
        domain: "coastal",
        adjacent: ["budapest", "galicia", "sevastapol", "ukraine", "bulgaria", "bulgariaec", "serbia", "blacksea"],
        coordinates: [27.246094, 45.02695]
    },
    stp: {
        supply:  true, 
        full: "stpetersburg",
        sentCase: "St. Petersburg",
        domain:  "inland",
        adjacent:  ["moscow", "finland", "livonia", "norway"],
        coordinates: [35.727539, 61.564574]
    },
    "stp/nc": { 
        full:  "stpetersburgnc",
        sentCase: "St. Petersburg N.C.",
        domain: "naval",
        adjacent: ["barentssea", "norway"],
        coordinates: [35.727539, 61.564574]
    },
    "stp/sc": { 
        full: "stpetersburgsc",
        sentCase: "St. Petersburg S.C.",
        domain: "naval",
        adjacent: ["finland", "gulfofbothnia", "livonia"],
        coordinates: [29.11624, 60.027014]
    },
    ser: {
        supply: true, 
        full: "serbia",
        sentCase: "Serbia",
        domain: "inland",
        adjacent:  ["bulgaria", "rumania", "budapest", "trieste", "albania", "greece"],
        coordinates: [21.269531, 43.428988]
    },
    sev: {
        supply:  true, 
        full:  "sevastapol",
        sentCase: "Sevastapol",
        domain:  "coastal",
        adjacent: ["blacksea", "moscow", "ukraine", "rumania", "armenia"],
        coordinates: [35.332031, 47.783635]
    },
    smy: {
        supply: true, 
        full: "smyrna",
        sentCase: "Smyrna",
        domain: "coastal",
        adjacent: ["eastmed", "aegeansea", "syria", "armenia", "ankara", "constantinople"],
        coordinates: [29.553223, 37.675125]
    },
    spa: {
        supply: true, 
        full: "spain",
        sentCase: "Spain",
        domain: "inland",
        adjacent: ["portugal", "gascony", "marseilles"],
        coordinates: [-4.196777, 38.85682]
    },
    "spa/nc": { 
        full: "spainnc",
        sentCase: "Spain S.C.",
        domain: "naval",
        adjacent: ["portugal", "midatlantic", "gascony"],
        coordinates: [-5.075684, 43.181147]
    },
    "spa/sc": { 
        full: "spainsc",
        sentCase: "Spain S.C.",
        domain: "naval",
        adjacent: ["portugal", "gulfoflyon", "westmed", "midatlantic"],
        coordinates: [-0.142822, 38.741231]
    },
    swe: {
        supply: true, 
        full: "sweden",
        sentCase: "Sweden",
        domain: "coastal",
        adjacent: ["norway", "finland", "gulfofbothnia", "skagerrak", "denmark", "balticsea"],
        coordinates: [14.501953, 59.734253]
    },
    tri: {
        supply: true, 
        full: "trieste",
        sentCase: "Trieste",
        domain: "coastal",
        adjacent: ["budapest", "vienna", "tyrolia", "serbia", "albania", "venice", "adriaticsea"],
        coordinates: [16.875, 44.339565]
    },
    tun: {
        supply: true, 
        full: "tunis",
        sentCase: "Tunis",
        domain: "coastal",
        adjacent: ["northafrica", "tyrrheniansea", "westmed", "ioniansea "],
        coordinates: [8.811035, 35.119909]
    },
    ven: {
        supply: true, 
        full: "venice",
        sentCase: "Venice",
        domain: "coastal",
        adjacent: ["trieste", "tyrolia", "piedmont", "adriaticsea", "tuscany", "rome", "apulia"],
        coordinates: [11.634521, 44.84808]
    },
    vie: {
        supply: true, 
        full: "vienna",
        sentCase: "Vienna",
        domain: "inland",
        adjacent: ["budapest", "galicia", "bohemia", "tyrolia", "triest"],
        coordinates: [17.260566, 48.922499]
    },
    war: {
        supply: true, 
        full: "warsaw",
        sentCase: "Warsaw",
        domain: "inland",
        adjacent: ["ukraine", "livonia", "moscow", "galicia", "silesia", "prussia"],
        coordinates: [22.642822, 52.389011]
    },
    cly: {
        supply: false, 
        full: "clyde",
        sentCase: "Clyde",
        domain: "coastal",
        adjacent: ["edinburgh", "norwegiansea", "northatlantic", "liverpool"],
        coordinates: [-5.19104, 56.641127]
    },
    yor: {
        supply: false, 
        full:  "yorkshire",
        sentCase: "Yorkshire",
        domain: "coastal",
        adjacent: ["edinburgh", "london", "liverpool", "wales", "northsea"],
        coordinates: [-0.736084, 53.252069]
    },
    wal: {
        supply:  false, 
        full: "wales",
        sentCase: "Wales",
        domain: "coastal",
        adjacent: ["yorkshire", "irishsea", "englishchannel", "london", "liverpool"],
        coordinates: [-3.35083, 52.059246]
    },
    pic: {
        supply: false, 
        full: "picardy",
        sentCase: "Picardy",
        domain: "coastal",
        adjacent: ["belgium", "paris", "brest", "englishchannel", "burgundy"],
        coordinates: [2.054443, 49.759978]
    },
    gas: {
        supply: false, 
        full:  "gascony",
        sentCase: "Gascony",
        domain: "coastal",
        adjacent: ["spain", "spainnc", "brest", "paris", "burgundy", "marseilles", "midatlantic"],
        coordinates: [0.41748, 44.894796]
    },
    bur: {
        supply: false, 
        full: "burgundy",
        sentCase: "Burgundy",
        domain: "inland",
        adjacent: ["ruhr", "belgium", "munich", "paris", "picardy", "gascony", "marseilles"],
        coordinates: [4.515381, 47.554287]

    },
    naf: {
        supply: false, 
        full: "northafrica",
        sentCase: "North Africa",
        domain: "coastal",
        adjacent: ["midatlantic", "westmed", "tunis"],
        coordinates: [0.087891, 34.524661]
    },
    ruh: {
        supply: false, 
        full: "ruhr",
        sentCase: "Ruhr",
        domain: "inland",
        adjacent: ["kiel", "holland", "belgium", "munich", "burgundy"],
        coordinates: [7.294922, 50.666872]
    },
    pru: {
        supply: false, 
        full: "prussia",
        sentCase: "Prussia",
        domain:"coastal",
        adjacent: ["livonia", "warsaw", "silenia", "berlin", "balticsea"],
        coordinates: [17.841797, 53.644638]
    },
    sil: {
        supply: false, 
        full: "silesia",
        sentCase: "Silesia",
        domain: "inland",
        adjacent: ["prussia", "warsaw", "berlin", "galicia", "munich", "bohemia"],
        coordinates: [17.885742, 51.917168]
    },
    pie: {
        supply: false, 
        full: "piedmont",
        sentCase: "Piedmont",
        domain: "coastal",
        adjacent: ["venice", "tuscany", "tyrolia", "marseilles", "gulfoflyon"],
        coordinates: [7.910156, 44.746733]
    },
    tus: {
        supply: false, 
        full: "tuscany",
        sentCase: "Tuscany",
        domain:  "coastal",
        adjacent: ["venice", "piedmont", "rome", "gulfoflyon", "tyrrheniansea"],
        coordinates: [10.859985, 43.858297]
    },
    apu: {
        supply: false, 
        full: "apulia",
        sentCase: "Apulia",
        domain: "coastal",
        adjacent: ["naples", "venice", "rome", "adriaticsea", "ioniansea"],
        coordinates: [15.46875, 41.47566]
    },
    tyr: {
        supply: false, 
        full: "tyrolia",
        sentCase: "Tyrolia",
        domain: "inland",
        adjacent:["munich", "bohemia", "vienna", "trieste", "piedmont", "venice"],
        coordinates: [12.304688, 46.935261]
    },
    gal: {
        supply: false, 
        full: "galicia",
        sentCase: "Galicia",
        domain: "inland",
        adjacent: ["warsaw", "ukraine", "rumania", "budapest", "vienna", "bohemia", "silesia"],
        coordinates: [24.389648, 49.553726]
    },
    boh: {
        supply: false, 
        full: "bohemia",
        sentCase: "Bohemia",
        domain: "inland",
        adjacent: ["vienna", "tyrolia", "munich", "galicia", "silesia"],
        coordinates: [15.13916, 50.261254]
    },
    fin: {
        supply: false, 
        full: "finland",
        sentCase: "Finland",
        domain: "coastal",
        adjacent: ["stpetersburg", "stpetersburgsc", "norway", "sweden", "gulfofbothnia"],
        coordinates: [25.576172, 62.390369]
    },
    lvn: {
        supply: false, 
        full: "livonia",
        sentCase: "Livonia",
        domain: "coastal",
        adjacent: ["balticsea", "gulfofbothnia", "stpetersburg", "stpetersburgsc", "moscow", "warsaw", "prussia"],
        coordinates: [23.90625, 55.9492]
    },
    ukr: {
        supply: false, 
        full: "ukraine",
        sentCase: "Ukraine",
        domain: "inland",
        adjacent: ["sevastopol", "rumania", "galicia", "warsaw", "moscow"],
        coordinates: [29.509277, 49.510944]
    },
    alb: {
        supply: false, 
        full: "albania",
        sentCase: "Albania",
        domain: "coastal",
        adjacent: ["serbia", "greece", "trieste", "adriaticsea", "ioniansea"],
        coordinates: [20.083008, 40.647304]
    },
    arm: {
        supply: false, 
        full: "armenia",
        sentCase: "Armenia",
        domain: "coastal",
        adjacent: ["sevastopol", "blacksea", "syria", "ankara", "smyrna"],
        coordinates: [41.682129, 39.791655]
    },
    syr: {
        supply: false, 
        full: "syria",
        sentCase: "Syria",
        domain: "coastal",
        adjacent: ["smyrna", "armenia", "eastmed"],
        coordinates: [38.254395, 35.227672]
    },
    nat: {
        supply: false, 
        full: "northatlantic",
        sentCase: "North Atlantic",
        domain:  "naval",
        adjacent: ["midatlantic", "clyde", "liverpool", "irishsea"],
        coordinates: [-15.380859, 54.876607]
    },
    mid: {
        supply: false, 
        full: "midatlantic",
        sentCase: "MidAtlantic",
        domain: "naval",
        adjacent: ["northatlantic", "irishsea", "englishchannel", "spainnc", "spainsc", "brest", "gascony", "portugal", "northafrica"],
        coordinates: [-14.0625, 42.391009]
    },
    nrg: {
        supply: false, 
        full: "norwegiansea",
        sentCase: "Norwegian Sea",
        domain: "naval",
        adjacent: ["clyde", "edinburgh", "norway", "northsea", "barentssea", "northatlantic"],
        coordinates: [-1.230469, 63.743631]
    },
    nth: {
        supply: false, 
        full: "northsea",
        sentCase: "North Sea",
        domain: "naval",
        adjacent: ["belgium", "holland", "london", "yorkshire", "edinburgh", "norway", "skagerrak", "heligolandbight", "denmark"],
        coordinates: [2.06543, 56.486762]
    },
    eng: {
        supply: false, 
        full: "englishchannel",
        sentCase: "English Channel",
        domain: "naval",
        adjacent: ["london", "wales", "irishsea", "midatlantic", "belgium", "picardy", "brest"],
        coordinates: [-2.460938, 49.95122]
    },
    iri: {
        supply: false, 
        full: "irishsea",
        sentCase: "Irish Sea",
        domain:  "naval",
        adjacent: ["englishchannel", "midatlantic", "northatlantic", "liverpool", "wales"],
        coordinates: [-7.954102, 50.247205]
    },
    hel: {
        supply: false, 
        full: "helgolandbight",
        sentCase: "Helgoland Bight",
        domain: "naval",
        adjacent: ["denmark", "kiel", "holland", "northsea"],
        coordinates: [5.888672, 54.425322]
    },
    ska: {
        supply: false, 
        full: "skagerrak",
        sentCase: "Skagerrak",
        domain: "naval",
        adjacent: ["denmark", "norway", "sweden", "northsea"],
        coordinates: [9.580078, 58.008098]
    },
    bal: {
        supply: false, 
        full: "balticsea",
        sentCase: "Baltic Sea",
        domain: "naval",
        adjacent: ["sweden", "denmark", "berlin", "kiel", "livonia", "prussia", "gulfofbothnia"],
        coordinates: [18.369141, 56.072035]
    },
    bot: {
        supply:  false, 
        full: "gulfofbothnia",
        sentCase: "Gulf of Bothnia",
        domain: "naval",
        adjacent: ["finland", "sweden", "stpetersburgsc", "livonia", "balticsea"],
        coordinates: [21.09375, 59.355596]
    },
    bar: {
        supply:  false, 
        full: "barentssea",
        sentCase: "Barents Sea",
        domain: "naval",
        adjacent: ["stpetersburgnc", "norwegiansea", "norway"],
        coordinates: [37.792969, 70.568803]
    },
    wes: {
        supply: false, 
        full: "westmed",
        sentCase: "Western Mediterranean",
        domain: "naval",
        adjacent: ["midatlantic", "spainsc", "northafrica", "gulfoflyon", "tunis", "tyrrheniansea"],
        coordinates: [3.427734, 37.961523]
    },
    gol: {
        supply: false, 
        full: "gulfoflyon",
        sentCase: "Gulf of Lyon",
        domain: "naval",
        adjacent: ["westmed", "spainsc", "marseilles", "piedmont", "tuscany", "tyrrheniansea"],
        coordinates: [5.668945, 41.508577]
    },
    tys: {
        supply: false, 
        full: "tyrrheniansea",
        sentCase: "Tyrrhenian Sea",
        domain: "naval",
        adjacent: ["naples", "rome", "tuscany", "ioniansea", "gulfoflyon", "westmed", "tunis"],
        coordinates: [11.99707, 39.53794]
    },
    ion: {
        supply: false, 
        full: "ioniansea",
        sentCase: "Ionian Sea",
        domain: "naval",
        adjacent: ["tunis", "tyrrheniansea", "naples", "apulia", "greece", "aegeansea", "albania", "adriaticsea", 'eastmed'],
        coordinates: [17.402344, 35.639441]
    },
    adr: {
        supply: false, 
        full: "adriaticsea",
        sentCase: "Adriatic Sea",
        domain: "naval",
        adjacent: ["trieste", "vienna", "apulia", "albania", "ioniansea"],
        coordinates: [15.776367, 42.747012]
    },
    aeg: {
        supply: false, 
        full: "aegeansea",
        sentCase: "Aegean Sea",
        domain: "naval",
        adjacent: ["constantinople", "smyrna", "bulgariasc", "greece", "eastmed"],
        coordinates: [25.499268, 36.897194]
    },
    eas: {
        supply: false, 
        full: "eastmed",
        sentCase: "Eastern Mediterranean",
        domain: "naval",
        adjacent: ["smyrna", "syria", "aegeansea", "ioniansea"],
        coordinates: [29.20166, 34.651285]
    },
    bla: {
        supply: false, 
        full: "blacksea",
        sentCase: "Black Sea",
        domain: "naval",
        adjacent: ["constantinople", "ankara", "armenia", "sevastapol", "rumania", "bulgariaec"],
        coordinates: [33.991699, 43.261206]
    }
}