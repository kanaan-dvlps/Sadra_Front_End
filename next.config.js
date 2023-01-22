module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['app.3smedical.co'],
  },
  experimental: {
    // outputStandalone: true,
    images: {
      allowFutureImage: true,
    },
    output: 'standalone',
  },
}
