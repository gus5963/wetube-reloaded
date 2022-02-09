import express from "express";
import { userId, logout, edit, deleted } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/delete", deleted);
userRouter.get("/:id", userId);

export default userRouter;