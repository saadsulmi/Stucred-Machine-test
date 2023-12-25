const userRouter=require('express').Router();
const multer = require('multer')
const {userAuthenticator} = require('../middlewares/userAuth')
const { createUser, loginUser, addImage, getimages, addVideo } = require('../controllers/userController')

const upload = multer ({

})

userRouter.post('/signup',createUser);
userRouter.post('/login',loginUser);
userRouter.use(userAuthenticator)
userRouter.post('/addImage',upload.any(),addImage);
userRouter.post('/uploadVideo',upload.any(),addVideo);
userRouter.post('/getUserImg',getimages);


module.exports = userRouter