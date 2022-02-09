import express from "express";
import { home, search } from "../controllers/videoController";
import { join, login } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);
/* 
   Join, Login을 따로 controller로 빼지 않는 이유는 두 URL은 users 영역이기 때문에 userController에다가 둬야 한다.
   Search, home도 또한 Video를 찾는 거기 때문에 vidoeController에 작성해야 한다. 
*/

export default globalRouter;
