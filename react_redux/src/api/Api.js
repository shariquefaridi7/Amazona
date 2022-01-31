import axios from "axios"

const url1 ='https://fakestoreapi.com/products';
const url2='http://localhost:5000/post';
const url3='http://localhost:5000/sigin';


export const getProducts =async()=>{
    return  await axios.get(url1);

}

export const PostDatas =async(data)=>{
    return await axios.post(url2,data)
}

export const sigin=async(data)=>{
    return axios.post(url3,data)
}


