import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/pages/works/software",
        destination: "/software",
        permanent: true,
      },
      {
        source: "/pages/works/ai-systems",
        destination: "/ai-systems",
        permanent: true,
      },
      {
        source: "/pages/works/mc-hosting",
        destination: "/mc-hosting",
        permanent: true,
      },
      {
        source: "/pages/works/acting-modeling",
        destination: "/acting-modeling",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
