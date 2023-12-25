const jwt = require('jsonwebtoken')
require('dotenv').config();

const userAuthenticator = async (req,res,next)=>{
    try {
        let token = req.header('auth-token')
        const user = jwt.verify(token,process.env.JWT_SECRET_KEY)
        if(user){
            next()
        }else{
            res.status(401).json({message:'user not authorized'})
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports ={ userAuthenticator}