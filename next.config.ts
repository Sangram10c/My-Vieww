import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "raw.githubusercontent.com",
      "github.com",
    ],
  },
};

export default nextConfig;
