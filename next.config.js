/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: true,
  },
  trailingSlash: true,
  output: 'export',
  // Remove distDir to use default 'out' directory
  // basePath: '/nutriota-next.js-app2', // Uncomment if using GitHub Pages
}

module.exports = nextConfig
