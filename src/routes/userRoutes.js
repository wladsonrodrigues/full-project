import express from "express";
import controller from "../controllers/userController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", auth, controller.listUsers);



