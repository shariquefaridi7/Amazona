import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Deletes } from "../Redux/Actions/Action";
import Rating from "./Rating";
import { NavLink } from "react-router-dom";


export const Add_Cart = () => {
    const dispatch = useDispatch();
    const Cart = useSelector((state) => state.Carts);
    const [save, setsave] = useState([]);

    //  Code for  delete the cart----
    useEffect(() => {
        setsave(Cart);
    }, [Cart])

    const Remove = (idn) => {
        console.log(idn);
        const del = save.filter((x) => x.id !== idn);
        console.log(del);

        if (del) {
            dispatch(Deletes(del));
        }



    }

    // End

    const Cart_Data = Cart.map((info) => {

        return (

            <div className='col-md-4 col-lg-4 col-xl-3 col-sm-6 col-xs-12'>


                <br />   <br />
                <div className="card" style={{ width: "300px" }} ><br />

                    <img className="card-img-top medium p-3" height={"280px"} src={info.image} />

                    <div className="card-body">

                        <h3 style={{ color: "black" }}>{info.title}</h3>

                        <Rating rating={info.rating.rate} /><br />
                        <div className="prices" ><h5><b>Price</b>  {info.rating.count}</h5></div>


                        <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            Remove
                        </button>

                        <div className="modal fade" id="staticBackdrop" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog  modal-dialog-centered">
                                <div className="modal-content">

                                    <div className="modal-body">
                                        <h5 className="modal-title" id="staticBackdropLabel">Remove Item</h5><br />
                                        <p><b>Are you sure you want to remove this item</b></p>

                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={Remove.bind(this, info.id)}>Remove</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div><br />
            </div>
        )

    });

    return (
        <>            
          <NavLink to="/home" style={{ textDecoration: "none", color: "black" }}><span ><i style={{ fontSize: "50px" }} class="fas fa-hand-point-left"></i></span> </NavLink>

            <div className="container-fluid">
                <div className="row">
                    {Cart_Data}
                </div>

            </div>
        </>
    )
}
