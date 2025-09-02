/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: true,
  },
  trailingSlash: true,
  output: 'export',
  distDir: 'dist',
}

module.exports = nextConfig
