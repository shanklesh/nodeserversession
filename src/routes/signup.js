import express, { Router } from "express";
import { signupCtrl } from "../controllers/signupController.js";
const routes = Router();

routes.post("/users", signupCtrl);

export { routes as signUpRoutes };
