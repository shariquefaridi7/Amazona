import { combineReducers } from "redux";
import { Reducers } from "./index";
import { Reduce_2 } from "./Reduce_2";
import { Cart } from "./ADD_TO_CART";
import { PostData } from "./PostData";
import {Auth} from "./Auth";
import { Sigin } from "./Sigin";


const RootReducer = combineReducers({
    Reduce:Reducers,
    Reduce2:Reduce_2,
    Carts:Cart,
    Post:PostData,
    Auths:Auth,
    SigIn:Sigin
})
export default RootReducer;