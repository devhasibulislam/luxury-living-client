/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["http://localhost:5000/"],
  },
};

module.exports = nextConfig;
