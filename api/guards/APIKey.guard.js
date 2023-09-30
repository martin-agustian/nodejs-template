const APIKeyMiddleware = (req, res, next) => {
  const apiKey = req.headers["api-key"];

  if ((apiKey) && (apiKey == process.env.API_KEY)) {
    next();
  }
  else {
    next({
      status: 401,
      message: "Unauthorized",
    });
  }
};

module.exports = APIKeyMiddleware;
