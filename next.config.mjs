/** @type {import('next').NextConfig} */
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

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
      config.optimization.minimizer = [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
          },
        }),
        new CssMinimizerPlugin(),
      ];
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 0,
      };
    }

    return config;
  },
  productionBrowserSourceMaps: false,
};

export default nextConfig;
