const errorResponder = (err, request, response, next) => {
  response.header("Content-Type", "application/json");

  const status = err.statusCode || 500;

  response.status(status).json({
    message: err.message || "Internal Server Error",
  });
};

module.exports = { errorResponder };
