const jwt=require('jsonwebtoken')
require('dotenv').config()

const createToken = async (user)=>{
    return jwt.sign(user,process.env.JWT_SECRET_KEY)
}

const verifyToken = async (token)=>{
    return jwt.verify(token,process.env.JWT_SECRET_KEY)
}

module.exports ={
    createToken,
    verifyToken
}