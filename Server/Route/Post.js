import Express from 'express';

import { Sigin ,PostData,orderData} from '../Control/Post.js';


const Route=Express.Router();

Route.post("/sigin",Sigin);
Route.post("/post",PostData);
Route.post("/send",orderData)


export default  Route;