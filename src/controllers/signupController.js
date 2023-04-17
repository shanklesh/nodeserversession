import { StatusCodes } from "http-status-codes";

export const signupCtrl = (req, res) => {
  console.log(req.body);

  console.log("inside ctrl", req.headers);

  res
    .status(StatusCodes.ACCEPTED)
    .send({ message: "User created successfully", data: req.body });
};
