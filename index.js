const express = require('express')
const app = express();
const mongoose = require('mongoose')
const userRouter = require('./routes/userRouter')
const profileRouter=require('./routes/profileRouter')


//update
console.log("new things")


app.use(express.json())


app.listen('5000', ()=> console.log('server running on 5000'))

mongoose.connect('mongodb://localhost:27017/socialmedial')
    .then(()=> console.log('database connected..'))
    .catch((err) => console.log(err))


    app.use("",userRouter);
    app.use("",profileRouter);