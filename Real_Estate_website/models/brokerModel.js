const mongoose  = require("mongoose");

const brokerSchema = new mongoose.Schema({
    uid: {type: String, required: true },
    commission: {type: String, required: true},
    company: {type: String},
});

module.exports = broker = mongoose.model("broker",brokerSchema); 