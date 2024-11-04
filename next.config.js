/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   domains: ['res.cloudinary.com'],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
