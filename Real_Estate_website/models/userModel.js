const mongoose  = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {type: String, required: true , unique: true},
    password: {type: String, required: true, minlength:5},
    name: {type: String, required: true },
    phone: {type: Number, required:true, minlength:10 },
    address: {type: String, required: true },
    role: {type: String, required: true },
});

module.exports = user = mongoose.model("user",userSchema); 