import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/pages/works/software",
        destination: "/software",
      },
      {
        source: "/pages/works/ai-systems",
        destination: "/ai-systems",
      },
      {
        source: "/pages/works/mc-hosting",
        destination: "/mc-hosting",
      },
      {
        source: "/pages/works/acting-modeling",
        destination: "/acting-modeling",
      },
    ];
  },
};

export default nextConfig;
