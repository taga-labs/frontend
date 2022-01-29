const webpack = require("webpack");

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    stream: require.resolve("stream-browserify"),
    assert: require.resolve("assert"),
    util: require.resolve("util"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    os: require.resolve("os-browserify/browser"),
    url: require.resolve("url"),
    crypto: require.resolve("crypto-browserify")
  });
  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);
  return config;
};