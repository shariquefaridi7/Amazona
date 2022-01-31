import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Rating from './Rating';
import { NavLink } from 'react-router-dom';
import "../CSS/ProductDetail.css";
import { Product } from '../Redux/Actions/Action';
import { ADD_TO_CART } from '../Redux/Actions/Action';
import axios from 'axios';


const ProductDetail = () => {
    const [Book, setBook] = useState([]);

    const dispatch = useDispatch();

    const data = useSelector((state) => state.Reduce);

    const { id } = useParams();

    const product = data.find((x) => x.id == id);
    const [pro, setpro] = useState({});


    useEffect(() => {
        dispatch(Product(product))
    }, [product]);


    // Checking Data from Cart Store---

    const CartData = useSelector((state) => state.Carts); //  Getting Data from Cart Store

    useEffect(() => {
        setBook(CartData);
        setpro(product);
    }, [])

    const Check = () => {

        const CheckCart = Book.find((x) => x.id === pro.id);
        console.log(Book);

        console.log(CheckCart);
        if (!CheckCart) {
            dispatch(ADD_TO_CART(pro));
        }
    }
    // Sending Detail to Backend

    const {Name,Email}=useSelector((state)=>state.Post);
    const {userSignin,usermail}=useSelector((state)=>state.SigIn);
    const {userDetail,EmailAuth}=useSelector((state)=>state.Auths);
    const FullName=Name?Name:"";
    const EmailUp=Email?Email:"";
    //Condtion for getting name
    const name=userDetail?userDetail:FullName?FullName:userSignin;

    //Condition for getting email
    const email=EmailAuth?EmailAuth:EmailUp?EmailUp:usermail;

    //Check Metohds--
    const [order,setorder] =useState({category:product.category,title:product.title,price:product.rating.count,Name:name,method:"",email})

    const check=(e)=>{
     const {value}=e.target;
   setorder((oldData)=>{
       if (value==="Cash") {
           return{
               category:oldData.category,
               title:oldData.title,
               price:oldData.price,
               Name:oldData.Name,
               method:"Cash On Delivery",
               email:oldData.email
           }
           
       }else return{
        category:oldData.category,
        title:oldData.title,
        price:oldData.price,
        Name:oldData.Name,
        method:"Online Payment",
        email:oldData.email
       }
   })
    }
  
const Send=(e)=>{
    e.preventDefault();
        axios.post('http://localhost:5000/send',order);
        console.log("Send");
        alert("Order Succesfull Check Your email ...")
}




    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <NavLink to="/home" style={{ textDecoration: "none", color: "black" }}><span ><i style={{ fontSize: "50px" }} class="fas fa-hand-point-left"></i></span> </NavLink>


                    <div className='col-xl-2 col-lg-2 col-md-2 col-sm-3 '>
                        <img src={product.image} className='padding img' height={"auto"} />

                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-5 col-sm-4'></div>

                    <div className="col-xl-3 col-lg-4 col-md-5 col-sm-5" >
                        <ul className='padding'>
                            <li>
                                <h1>{product.title}</h1>
                            </li>
                            <li>
                                <Rating rating={product.rating.rate} />
                            </li>
                            <li>
                                <b>Price</b>  : {product.rating.count}
                            </li>
                            <li>
                                <b> Description</b> : {product.description}
                            </li>
                        </ul>
                        <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            Order Now
                        </button>

                        <div className="modal fade" id="staticBackdrop" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog  modal-dialog-centered">
                                <div className="modal-content">

                                    <div className="modal-body">
                                        <h4 className="modal-title" id="staticBackdropLabel"><b>Order Summary</b></h4><br />
                    
                                        <h6 className="Category"><b>Category --  </b>{product.category}</h6>
                                        <h6><b>Title -- </b> {product.title}</h6>
                                         <h6> <b>Price -- </b> Rs.
                                      {product.rating.count}</h6>
                                      <h6><b>Payment Methods ----</b></h6>
                                      <input type={'radio'} name='method' value={"Cash"} onChange={check}/><b>  Cash On Delivery    </b> 
                                      <input type={'radio'} name='method' value={"online"} onChange={check}/><b>  Online Payment</b> <br/>


                                        <p className='text-danger'><b> ! Are you sure you want to order this item.</b></p>

                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" type="submit" onClick={Send}>Yes</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="col-xl-4 col-lg-3  padding">

                        <div className=" card card-body ">
                            <ul className='padding' >
                                <li>
                                    <h5 className='Category'>Category </h5>
                                    <h6 className="Category">{product.category}</h6>
                                </li>

                                <li><div className="row ">

                                    <div >{<Rating rating={product.rating.rate} />} </div>
                                </div></li>

                                <li><div className="row ">
                                    <h5> Price </h5>
                                    <div className="price">{product.rating.count}</div>
                                </div></li>
                                <li><div className="row">
                                    <h5> Status </h5>
                                    <div className="stock">{product.rating.count > 0 ? <span className="text-success"><b>In Stock</b>  </span> : <span className="text-danger"> <b>Unavailable</b> </span>}</div>
                                </div></li><br />
                                <li>
                                    <button className="btn btn-success" onClick={Check}>Add to Cart</button>
                                    <NavLink to="/Add_To_Cart" style={{ marginLeft: "20px", backgroundColor: "blue", textDecoration: "none", color: "white", border: "2px solid blue", borderRadius: "4px", padding: "2.3%" }}>See In Cart</NavLink>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
            </div>


        </>
    )
}

export default ProductDetail;