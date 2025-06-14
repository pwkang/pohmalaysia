/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  redirects: () => {
    return [
      {
        source: '/poh-about',
        destination: '/poh-origin',
        permanent: true,
      },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pohmalaysia.com',
      },
    ],
  },
};

export default nextConfig;
