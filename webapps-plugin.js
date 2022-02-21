module.exports = function (context, options) {
    return {
      name: 'webapps-plugin',
      configureWebpack(config, isServer, utils) {
        return {
          resolve: {
            fallback: {
                path: require.resolve('path-browserify'),
                url: require.resolve('url/'),
                process: require.resolve('process/browser'),
            }
        }
        };
      },
    };
  };