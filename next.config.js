/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://ll-luxury-living.herokuapp.com/"],
  },
};

module.exports = nextConfig;
