import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  // basePath removed for custom domain (offer.aicharttraders.com)
  // assetPrefix removed for custom domain
};

export default nextConfig;
