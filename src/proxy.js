const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/3cx-proxy',
    createProxyMiddleware({
      target: 'https://1100.3cx.cloud',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/3cx-proxy': '', // Remove '/3cx-proxy' from URL before sending
      },
    })
  );
};
