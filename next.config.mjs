/** @type {import('next').NextConfig} */
const nextConfig = {
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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pohmalaysia.com',
      },
    ],
  },
};

export default nextConfig;
