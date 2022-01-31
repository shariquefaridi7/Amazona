import  {applyMiddleware, createStore } from "redux";
import RootReducer from "../Reducer/RootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import logger from "redux-logger";


const Store = createStore(RootReducer,composeWithDevTools(applyMiddleware(logger,thunk)));

export default Store;