/** @type {import('next').NextConfig} */
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

const nextConfig = {
  images: {
    domains: [
      'relaytoon-dev.s3.ap-northeast-2.amazonaws.com',
      'relaytoon-prod.s3.ap-northeast-2.amazonaws.com',
    ],
  },
  env: {
    NEXT_PUBLIC_BACKEND_URL:
      process.env.NODE_ENV === 'production'
        ? 'https://api.relaytoon.site:8000'
        : 'http://localhost:8000',
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
