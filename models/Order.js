const mongoose = require("mongoose");
const { schema } = require("./User");
const Schema = mongoose.Schema;

const unitOrder = new Schema({
    order: {type: [String], default: ["bel", "Hold"]}
});
const NationsOrder = new Schema({
    territoryName: {type: String, default: "Bel"},
    orders: {type: [unitOrder], default: ["Hi", "hi2"]}
});

const Order = new Schema({
    _id: mongoose.ObjectId,
    England: [NationsOrder],
    France: [NationsOrder],
    Italy: [NationsOrder],
    Germany: [NationsOrder],
    Austria: [NationsOrder],
    Turkey: [NationsOrder],
    Russia: [NationsOrder]
});


const orders = mongoose.model('orders', Order);
const nationalorder = mongoose.model('nationalorder', NationsOrder);
const unitorder = mongoose.model('unitorder', unitOrder);

module.exports = {
    orders,
    nationalorder,
    unitorder
};