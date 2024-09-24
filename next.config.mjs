/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: () => {
    return [
      {
        source: '/poh-about',
        destination: '/about-us',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
