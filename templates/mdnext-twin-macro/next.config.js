const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.node = { fs: 'empty' };
    }

    return config;
  },
});
