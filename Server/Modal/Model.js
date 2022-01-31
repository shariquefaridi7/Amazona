import  Mongoose from "mongoose";

const Schema=Mongoose.Schema({
  Name:{
      type:"String",require:true,
  },
 
  Email:{
      type:"String",require:true,unique:true
  },
  Password:{
      type:"String",require:true
  },
  ConfirmPassword:{
    type:"String",require:true
},
});

const Document=Mongoose.model("UserInfo",Schema);
export default Document;