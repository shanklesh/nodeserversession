const NotFound = (req, res, next) => {
  res.status(404).send({ message: "Api not fund" });
};

export default NotFound;
