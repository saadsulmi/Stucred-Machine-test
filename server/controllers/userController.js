const userModel=require('../models/userModel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const { createToken } = require('../utils/jwt')

const createUser=async(req,res)=>{
    try {
        const {email,username,password}=req.body
        const isExist=await userModel.findOne({email:{$regex:email}})
        if(isExist){
            res.status(409).json({message:'user already exist'})
        }else{
            const salt=10;
            const hashedpassword = await bcrypt.hash(password,salt)
            const newUser=await userModel.create({username,email,password:hashedpassword})
            const user={
                username:newUser.username,
                id:newUser.id
            }
            await newUser.save()
            const token = await createToken(user)
            res.status(200).json({message:'successfull',token})
        }
    } catch (error) {
        console.log(error.message);
        res.status(400).json({message:error.message})
    }
}


const loginUser=async (req,res)=>{
    try {
        const {email,password} = req.body
        const user=await userModel.findOne({email:{$regex:email}});
        if(user&&await bcrypt.compare(password,user.password)){
            const userdata={
                username:user.username,
                id:user.id
            }
            const token = await createToken(userdata)
            return res.status(200).json({message:'login successfull',token})
        }
        res.status(401).json({message:'Incorrect username or password.'})
    } catch (error) {
        console.log(error);
        res.status(400).json({message:error.message}) 
    }
}

module.exports={
    createUser,
    loginUser
}