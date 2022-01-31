import  Express  from "express";
import Router from "./Route/Post.js";
import  Mongoose  from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors';
const app=Express();
const Port =5000;

//Connect Db with Mongoose
Mongoose.connect("mongodb+srv://Sharique123:Sharique123@cluster0.eecbc.mongodb.net/Amazona?retryWrites=true&w=majority").then(()=>{console.log("DataBase Connnect")}).catch(()=>console.log("Somethind Wrong With Db"));

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// cors use
app.use(cors());

// Use Route 
app.use("/",Router);


app.listen(Port,console.log(`Server Start at ${Port}` ))