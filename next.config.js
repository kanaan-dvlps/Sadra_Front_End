module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['app.3smedical.co'],
  },
  experimental: {
    // output: 'standalone',
    outputStandalone: true,
    images: {
      allowFutureImage: true,
    },
  },
}
