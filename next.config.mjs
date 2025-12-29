/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,       // keep React strict mode

  // For static images served from /public
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
