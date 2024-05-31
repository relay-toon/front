/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['relaytoon-dev.s3.ap-northeast-2.amazonaws.com'],
  },
  webpack: (config, { dev, isServer }) => {
    if (!isServer) {
      config.externals = config.externals.filter(
        (external) =>
          typeof external !== 'function' ||
          external.toString().indexOf('fabric') === -1,
      );
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    if (!dev) {
      config.optimization.minimize = true;
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 0,
      };

      config.module.rules.forEach((rule) => {
        if (rule.oneOf) {
          rule.oneOf.forEach((oneOf) => {
            if (oneOf.use) {
              oneOf.use.forEach((use) => {
                if (use.loader && use.loader.includes('css-loader')) {
                  use.options.modules = {
                    localIdentName: '[hash:base64:8]',
                  };
                }
              });
            }
          });
        }
      });
    }

    return config;
  },
  productionBrowserSourceMaps: false,
};

export default nextConfig;
