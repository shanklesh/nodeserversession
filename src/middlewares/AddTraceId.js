const addTraceId = (req, res, next) => {
  console.log(req.headers);
  req.headers["traceId"] = "1000202000020";

  next();
};

export default addTraceId;
