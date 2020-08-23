const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const unitOrder = new Schema({
//     order: {type: [String], default: ["bel", "Hold"]}
// });
const unitOrder = new Schema({
    territoryName: {type: String},
    order: {type: [String], default: []}
});

const Orders = new Schema({
    _id: mongoose.ObjectId,
    England: [unitOrder],
    France: [unitOrder],
    Italy: [unitOrder],
    Germany: [unitOrder],
    Austria: [unitOrder],
    Turkey: [unitOrder],
    Russia: [unitOrder]
});


const orders = mongoose.model('orders', Orders);
const unitorder = mongoose.model('unitOrder', unitOrder);
// const unitorder = mongoose.model('unitorder', unitOrder);

module.exports = {
    orders,
    unitorder
};