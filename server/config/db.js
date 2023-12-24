const mongoose = require('mongoose');
require('dotenv').config();

const connectDB=()=>{
    try {
         mongoose.connect(process.env.MONGO_URL)
        .then(res=>{
            console.log(`database connected successfully ${res.connection.host}`);
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports=connectDB