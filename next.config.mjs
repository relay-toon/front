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
    return config;
  },
};
