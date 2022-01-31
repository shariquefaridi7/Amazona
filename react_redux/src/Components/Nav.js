import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";




const Nav=()=>{
  
  // User Detail by Form--
    const {Name}=useSelector((state)=>state.Post);
    const {userSignin}=useSelector((state)=>state.SigIn);
    const FullName=Name?Name:"";
    const imageLink="/user.jpg";
   
   
    

    // User Detail by Google---

    const {userDetail,userImg}=useSelector((state)=>state.Auths);
  
  
    //Condtion for getting name
    const name=userDetail?userDetail:FullName?FullName:userSignin;
  
   const image=userImg?userImg:imageLink;

   //LogOut Function--

   const Lout=()=>{
   
    localStorage.clear();
    window.location().reload();
    
   }

    
    return(
        <>
        <div className="container-fluid">
        <div className="row">
        <nav class="navbar navbar-expand-lg navbar-light bg-dark" >
      
          <div className="col-xl-9 col-lg-8 col-md-7 col-sm-6 col-xs-8">
        <NavLink class="navbar-brand" to={Name||userDetail||userSignin?"/home":"/"} style={{textDecoration:"none",color:"white",fontSize:"30px",fontWeight:"bold"}} >Amazona</NavLink>
        </div>
        {
          userDetail||Name||userSignin?   <div className="col-xl-2 col-lg-3 col-md-5 col-sm-5 col-xs-3"> <h6 style={{color:"white",marginBottom:"-29px"}} > <img src={image}  width={"40px"} className="rounded-circle"/>  Hello {name}</h6><br/></div>:""
        }
     
        <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"style={{backgroundColor:"white",fontWeight:"bolder"}} data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span style={{color:"black",fontWeight:"bold"}} class="navbar-toggler-icon"></span>
    </button>
 
   
    
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
         
        {
          userDetail||Name||userSignin? <NavLink  to={"/"}  style={{textDecoration:"none",color:"white",fontSize:"19px"}} onClick={Lout}>LogOut</NavLink>:
    <NavLink  to={"/Sign_in"}  style={{textDecoration:"none",color:"white",fontSize:"19px"}}>SignIn</NavLink>
        }
  
        </li>
    
      </ul>
     
    </div>
    </div>

</nav>
</div>
</div>
        </>
    )
}
export default Nav;