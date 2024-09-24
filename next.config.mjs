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
};

export default nextConfig;
