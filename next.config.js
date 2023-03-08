/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:['api.snapp.market','snapp.market']
  }
}

module.exports = nextConfig
