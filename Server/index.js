import  Express  from "express";
import Router from "./Route/Post.js";
import  Mongoose  from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';
import dotenv from "dotenv";
import * as path from 'path';
const app=Express();
dotenv.config();
const Port =process.env.PORT||5000;

//Connect Db with Mongoose
Mongoose.connect(process.env.mongodb_url).then(()=>{console.log("DataBase Connnect")}).catch(()=>console.log("Somethind Wrong With Db"));

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// cors use

app.use(cors());

// Use Routes
app.use("/",Router);




app.listen(Port,console.log(`Server Start at ${Port}` ))