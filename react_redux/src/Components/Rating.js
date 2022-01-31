import React from "react";

const Rating=(prop)=>{
    const {rating} =prop;
    return(
        <>
         <div className="rating">
                            <span>
                          
                                 <i  style={{color:"yellow"}} className={rating >=1?"fa fa-star":rating>=0.5?"fas fa-star-half-alt":"far fa-star"}></i>
                            </span>
                            <span>
                                 <i  style={{color:"yellow"}} className={rating >=2?"fa fa-star":rating>=1.5?"fas fa-star-half-alt":"far fa-star"}></i>
                            </span>
                            <span>
                                 <i  style={{color:"yellow"}}  className={rating >=3?"fa fa-star":rating>=2.5?"fas fa-star-half-alt":"far fa-star"}></i>
                            </span>
                            <span>
                                 <i   style={{color:"yellow"}} className={rating >=4?"fa fa-star":rating>=3.5?"fas fa-star-half-alt":"far fa-star"}></i>
                            </span>
                            <span>
                                 <i  style={{color:"yellow"}}  className={rating >=5?"fa fa-star":rating>=4.5?"fas fa-star-half-alt":"far fa-star"}></i>
                            </span>
                          
                        
                        </div>

        </>
    )
}
export default Rating;

