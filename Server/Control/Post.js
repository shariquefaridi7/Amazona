import Document from "../Modal/Model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';


// For SignUp-----

export const PostData=async(req,res)=>{
    const {fname,lname,email,password,confirmPassword} =req.body;
    if(fname&&lname&&email&&password&&confirmPassword){
        if(password===confirmPassword){

            //Hashing Password by using bcryp js
            const hashPassword=await bcrypt.hash(password,12);
            
            const Insert= new Document({Name:fname+" "+lname,Email:email,Password:hashPassword,ConfirmPassword:hashPassword});
            try {
                const Send= await Insert.save();
                //Generate Token--
                if(email)
                { 
                const token = jwt.sign({email},process.env.PostData);
                console.log(token);
                res.status(200).json({Send,token});
                console.log(Send);
            }
        } catch (error) {
            res.json({message:error.message});
        }
    }
    else res.json({message:"Password Are not Same"});
    }
    else res.json({message:"Fill the Form Fully"})
   
   
}

export const Sigin=async(req,res)=>{
    const {email,password}=req.body;
 
    if(email&&password){
        const user=await Document.findOne({Email:email});
        const Name=user?user.Name:null;
      
        if(user){
          
            const CheckPassword=await bcrypt.compare(password,user.Password);
           
            if (CheckPassword) {
               const SiginToken= jwt.sign({email},process.env.Sigin);
               
                res.json({Name,SiginToken,email});
            } else {
                res.json({message:"Email or Password are not match"})
            }
        }else {
            res.json({message:"Email or Password are not match"})
        }

    }else res.json({message:"Fill the Form Completely"});

}

// Order Data---
 export const orderData=async(req,res)=>{
    const {category,title,price,Name,method,email}=req.body;
    console.log(email);
  
       // Send Email 
        const mailTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.email,
                pass: process.env.pass
            }
        });
        
        const mailDetails = {
            from: process.env.email,
            to: email,
            subject: `Order ${title}`,
            text:` Hello ${Name} 
            Your Order Details :-

            Category : ${category} ,
            Title : ${title},
            Price : Rs.${price},
            Metohds : ${method}

            Your Order must be Deliveried in Two Days.

            Regard Amazona
            Developed By - Mohd Sharique
             `
        };
        
        mailTransporter.sendMail(mailDetails, function(err, data) {
            if(err) {
                console.log('Error Occurs',err);
            } else {
                console.log('Email sent successfully');
            }
        });
    
            // ______________________Gmail END__________________
}