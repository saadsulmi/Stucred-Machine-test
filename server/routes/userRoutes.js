const userRouter=require('express').Router();
const multer = require('multer')
const { createUser, loginUser, addImage, getimages, addVideo } = require('../controllers/userController')

const upload = multer ({

})

userRouter.post('/signup',createUser);
userRouter.post('/login',loginUser);
userRouter.post('/addImage',upload.any(),addImage);
userRouter.post('/uploadVideo',upload.any(),addVideo);
userRouter.post('/getUserImg',getimages);


module.exports = userRouter