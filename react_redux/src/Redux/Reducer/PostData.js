 const initial={
     Name:JSON.parse(localStorage.getItem('Name'))?JSON.parse(localStorage.getItem('Name')):null,
     Email:JSON.parse(localStorage.getItem('Email'))?JSON.parse(localStorage.getItem('Email')):null,

 }
 export const PostData =(state=initial,action)=>{
    switch (action.type) {
        case "POSTData":
            return {Name:action.payload.Send.Name,Email:action.payload.Send.Email}
         
    
        default:
            return state
           
    }
}