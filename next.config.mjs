/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'poh-cdn.pwkang.com',
      },
    ],
  },
};

export default nextConfig;
