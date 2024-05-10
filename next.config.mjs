/** @type {import('next').NextConfig} */
export default {
  webpack: (config, { isServer }) => {
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

    return config;
  },
  
  images: {
    domains: ['relaytoon-dev.s3.ap-northeast-2.amazonaws.com'],
  },
};
