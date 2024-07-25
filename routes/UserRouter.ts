import express from "express";
import UserController from "../controllers/UserController";

const UserRouter = express.Router();

UserRouter.get("/", UserController.index);
UserRouter.get("/:id", UserController.show);

UserRouter.post("/", UserController.create);

UserRouter.put("/:id", UserController.update);
UserRouter.patch("/:id", UserController.update);

UserRouter.delete("/:id", UserController.destroy);

export default UserRouter;
