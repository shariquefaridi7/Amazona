const initalState={
    userSignin:JSON.parse(localStorage.getItem('userIn'))?JSON.parse(localStorage.getItem('userIn')):null,
    usermail:JSON.parse(localStorage.getItem('mail'))?JSON.parse(localStorage.getItem('mail')):null
}
 export const Sigin=(state=initalState,action)=>{
    switch (action.type) {
        case "SIGNIN":
              return {userSignin:action.payload.Name,usermail:action.payload.email}
           
    
        default:
           return state;
    }
}