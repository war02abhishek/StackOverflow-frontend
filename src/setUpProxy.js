const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://stackoverflow-backend-va6y.onrender.com",
      changeOrigin: true,
    })
  );
};
