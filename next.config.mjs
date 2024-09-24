/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pohmalaysia.com',
      },
    ],
  },
};

export default nextConfig;
