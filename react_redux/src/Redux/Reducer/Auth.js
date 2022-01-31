const initial={
    userDetail:JSON.parse(localStorage.getItem("profile"))?JSON.parse(localStorage.getItem("profile")):null,
    userImg:JSON.parse(localStorage.getItem("image"))?JSON.parse(localStorage.getItem("image")):null,
    EmailAuth:JSON.parse(localStorage.getItem("EmailAuth"))?JSON.parse(localStorage.getItem("EmailAuth")):null,
}

export const Auth=(state=initial,action)=>{
    switch (action.type) {
        case 'Auths':
         
           return {userDetail:action.payload.result.name,userImg:action.payload.result.imageUrl,EmailAuth:action.payload.result.email}
            
          
    
        default:
          return  state
          
    }
}