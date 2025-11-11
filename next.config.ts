import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: '/aicharttraderoffer',
  assetPrefix: '/aicharttraderoffer/',
};

export default nextConfig;
