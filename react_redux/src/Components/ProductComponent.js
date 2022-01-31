import React ,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import { SetProducts } from '../Redux/Actions/Action';
import { useSelector } from 'react-redux';
import Rating from './Rating';
import { NavLink } from 'react-router-dom';
import "../CSS/ProductDetail.css";


const ProductComponenet=()=>{



    const dispatch =useDispatch();
    useEffect(()=>{
        dispatch(SetProducts())
      },[]
       
      );
      const get=useSelector((state)=>state.Reduce);
  

      const Result=get.map((data)=>{
        return (
          <>
          
        <div className='col-md-4 col-lg-4 col-xl-3 col-sm-6 col-xs-12'>
   
      
                <div className="card"  ><br/>
                    <NavLink to={`/Component/${data.id}`}>
                        <img className="card-img-top medium p-3" src={data.image}  />
                    </NavLink>
                    <div className="card-body">
                    <NavLink to={`/Component/${data.id}`} style={{textDecoration:"none"}}>
                            <h3 style={{ color:"black"}}>{data.title}</h3>
                      </NavLink>
                       <Rating rating={data.rating.rate}/><br/>
                        <div className="prices" ><h5><b>Price</b>  {data.rating.count}</h5></div>

                    </div>
                </div><br/>
            </div>
     
        </>
        )
        
      });
      
    
    return(
        <>
       
     <div className="container-fluid">
      <br/>
    
       <div className='row'>
          {Result}
          </div>
          </div>

        </>
    )
}

export default ProductComponenet;