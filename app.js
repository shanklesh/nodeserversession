import express from "express";
import { StatusCodes } from "http-status-codes";
import { signUpRoutes } from "./src/routes/signup.js";
import NotFound from "./src/middlewares/NotFound.js";
import addTraceId from "./src/middlewares/AddTraceId.js";
import { fileUploadRoute } from "./src/routes/fileupload.js";
const app = express();

app.use(express.json());
app.use(addTraceId);
app.get("/health", (req, res) => {
  res.status(StatusCodes.OK).send("ok");
});
app.use(fileUploadRoute);
app.use(signUpRoutes);
app.use(NotFound);

export default app;
