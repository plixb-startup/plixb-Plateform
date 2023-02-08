module.exports = {
  webpack: (config) => {
    config.devServer = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":"*",
        "Access-Control-Allow-Headers": "*",
      },
    };
    return config;
  },
};
