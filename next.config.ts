import type { NextConfig } from "next";
// import '@/app/globals.css';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
   experimental: {
    serverActions: {
      bodySizeLimit: '5mb', // Adjust this value as needed, e.g., '5mb', '10mb'
    },
  },
};

export default nextConfig;
