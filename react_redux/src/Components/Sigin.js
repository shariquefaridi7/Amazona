import React, { useState } from "react";
import { sigin } from "../Redux/Actions/Action";
import { useDispatch ,useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

const Sigin=()=>{

  const dispatch=useDispatch();
  const Navigate=useNavigate();
  const {userSignin,usermail}=useSelector((state)=>state.SigIn);
  if(userSignin)
  {
    localStorage.setItem("userIn",JSON.stringify(userSignin));
    localStorage.setItem("mail",JSON.stringify(usermail));
    Navigate("/home");

  }
  const [Data,setData]=useState({
    email:"",
    password:""
  })

  const change=(e)=>{
     const {name,value}=e.target;
     setData((oldData)=>{
       if (name==="email") {
         return{
           email:value,
           password:oldData.password
         }
         
       } else {
        return{
          email:oldData.email,
          password:value
        }
       }
     })
  }

  const user=(e)=>{
  
    e.preventDefault();
   
 
 dispatch(sigin(Data));
    
    
  }
  return(
    
    <>
    <div className="container-fluid">
      <div className="row" ><div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
        <div className="col-xl-4 col-lg-6 col-md-5 col-sm-5 col-xs-4" >
        <h2 style={{marginBottom:"15px",marginTop:"10px",marginLeft:"100px"}}>SignIn Account</h2>
        <form method="POST" style={{border:"2px solid black",padding:"10%",paddingBottom:"20%",borderRadius:"10px"}}>
            <div className="form-group" >
							<label class="control-label" for="signinEmail" style={{marginBottom:"5px"}}><b>Email</b></label>
									<input  id="signinEmail" type="email" maxlength="50" class="form-control" onChange={change} name='email' value={Data.email} autoComplete="off" />
								</div><br/>
                <div className="form-group">
							<label class="control-label" for="siginPassword" style={{marginBottom:"5px"}}><b>Password</b></label>
									<input id="siginPassword" type="password" maxlength="50" class="form-control" onChange={change} name='password' value={Data.password} />
								</div>
                <br/>
                <button style={{paddingLeft:"44.5%",paddingRight:"44.5%",color:"white"}} type="submit"  className="btn btn-primary" onClick={user}>SignIn</button>
          
           

                </form>
        </div>
      </div>
    </div>
    </>
  )
}
export default Sigin;