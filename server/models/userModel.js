const mongoose = require('mongoose');

const userModel= new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    images:{
        type:[String],
    },
    videos:{
        type:[String],
    }
},{timestamps:true})

const user = mongoose.model('user',userModel);
module.exports=user