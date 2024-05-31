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
      const cssLoader = config.module.rules
        .find((rule) => rule.test && rule.test.test('.css'))
        .use.find((use) => use.loader === 'css-loader');

      cssLoader.options.modules = {
        localIdentName: '[hash:base64:8]',
      };
    }

    return config;
  },
  productionBrowserSourceMaps: false,
};

export default nextConfig;
