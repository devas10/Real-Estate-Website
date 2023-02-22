const mongoose  = require("mongoose");

const customerSchema = new mongoose.Schema({
    uid: {type: String, required: true },
    requirement: {type: String, required: true},
    budget: {type: String, required: true},
});

module.exports = customer = mongoose.model("customer",customerSchema); 