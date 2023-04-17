import { Router } from "express";

const routes = Router();

routes.post("/fileupload", (req, res) => {
  const file = req.file;
  if (!file) {
    res.status(500).send({ message: "Please send the file" });
  }

  res.status(200).send({ message: "file uploaded successfully" });
});

export { routes as fileUploadRoute };
