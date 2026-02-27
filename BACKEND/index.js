const express = require('express');
const app = express();
const port = 3000
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
const {MONGO_URL} = process.env;

app.use(
    cors({
        origin:["http://localhost:5173"],
        methods:["GET","POST","PUT","DELETE"],
        credentials:true,
    })
);

app.listen(port,()=>{
    console.log(`App is listening on port ${port}.`);
    mongoose.connect(MONGO_URL)
    .then(()=>{
        console.log("Connected to Database");
    })
    .catch((err)=>{
        console.log("Connection failed",err);
    })
})
// OR
// app.listen(port);
