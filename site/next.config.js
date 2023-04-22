/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Mapache Webtops',
    description: 'workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://successbyfailure.github.io/kasm-registry/1.0/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
