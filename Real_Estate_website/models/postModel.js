const mongoose  = require("mongoose");

const postSchema = new mongoose.Schema({
    pid: {type: String, required: true},
    pname: {type: String, required: true , unique: true},
    paddress: {type: String, required: true, minlength: 5},
    pzip: {type: String, required: true },
    pcost: {type: Number, required:true, minlength:10 },
    pspace: {type: String, required: true },
    pdescription: {type: String, required: true },
    ptype: {type: String, required: true },
    pavailability: {type: String, required: true },
});

module.exports = post = mongoose.model("post",postSchema); 