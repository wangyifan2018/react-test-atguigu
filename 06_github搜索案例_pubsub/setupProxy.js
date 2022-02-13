//引入插件
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use("/api1",
    createProxyMiddleware({
      target: "http://localhost:5000",//目标端口
      changeOrigin: true,
      pathRewrite: {
        "^/api1": ""
      }
    })
  );
};
