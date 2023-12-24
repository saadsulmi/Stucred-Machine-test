const express= require('express');
const cors=require('cors')
const connectDB = require('./config/db');
const userRouter = require('./routes/userRoutes');

require('dotenv').config();
const app=express()

const port=process.env.PORT||5000
const corsOption={
    origin:'*',
    methods:['POST','PATCH','GET'],
    allowedHeaders:['Content-Type','auth-token']
}

app.use(cors({corsOption}))
app.use(express.json({limit:'50mb'}))

connectDB()

app.use('/api',userRouter)


app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})