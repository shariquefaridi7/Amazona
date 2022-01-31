import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ProductComponenet from './Components/ProductComponent';
import ProductDetail from './Components/ProductDetails';
import { Add_Cart } from './Components/Add_Cart.';
import Registration from './Components/Registration';
import Signin from './Components/Sigin';
import Nav from './Components/Nav';
import { useSelector } from 'react-redux';
import ErrorPage from './Components/ErrorPage';


const App =()=>{
  const {Name}=useSelector((state)=>state.Post);
  const {userSignin}=useSelector((state)=>state.SigIn);
  const {userDetail}=useSelector((state)=>state.Auths);
  const FullName=Name?Name:"";
 
  //Condtion for getting name
  const name=userDetail?userDetail:FullName?FullName:userSignin;

  return (
    <>
   
     <BrowserRouter>
     <Nav/>
    <Routes>
      { name?  <Route path="/home" element={<ProductComponenet/>}/>:  <Route path="*" element={<ErrorPage/>}/>}
    
      <Route path="/Component/:id" element={<ProductDetail/>}/>
      <Route path="/Add_To_Cart" element={<Add_Cart/>}/>
      <Route path="/" element={<Registration/>}/>
      <Route path="/Sign_in" element={<Signin/>}/>
      

    </Routes>
    </BrowserRouter>
   
    
    </>
  )
}

export default App;