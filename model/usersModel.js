const mongoose = require('mongoose');
mongoose.connect(process.env.MONGOURI, {useNewUrlParser: true, useUnifiedTopology: true});

const userModel = mongoose.model("User",{
    name:String,
    age:Number,
    gender:String,
},'User');
module.exports = {userModel};