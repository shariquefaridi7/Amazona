import * as api from '../../api/Api';


export const SetProducts=()=>async(dispatch)=>{
   
 try {
    const {data} = await api.getProducts();
    
    dispatch({type:"SETPRODUCTS",payload:data})
     
 } catch (error) {
     console.log(error);
 }
   
   
}

export const Product =(data)=>async(dispatch)=>{
    try {
     
        dispatch({type:"PRODUCTS",payload:data})
    } catch (error) {
        console.log(error);
    }
}

export const ADD_TO_CART =(add)=>async(dispatch)=>{
    try {
      
        dispatch({type:"ADD_TO_CART",payload:add})
    } catch (error) {
        console.log(error);
    }

}
export const Deletes=(del)=>async(dispatch)=>{
    try {
        dispatch({type:"Delete",payload:del})
    } catch (error) {
        console.log(error);
    }
}

export const PostData =(datas)=>async(dispatch)=>{

    const {data} =await api.PostDatas(datas);
   
    if(data.token){
        window.alert("Sign up successful");
    
    }
    else{
        window.alert(data.message)
    }
 

 
    dispatch({type:"POSTData",payload:data})
}
  
export const authgo=(infor)=>async(dispatch)=>{
    dispatch({type:"Auths",payload:infor})
}

export const sigin=(Data)=>async(dispatch)=>{
    const {data}=await api.sigin(Data);
  
    if(data.Name){
      
        alert("Sigin Success");
    } else{
        alert(data.message);
    }
    dispatch({type:"SIGNIN",payload:data})
    
}