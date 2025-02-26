import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "bulbapedia.bulbagarden.net", // Previously added domain
      "archives.bulbagarden.net", // New domain to allow for images
    ],
  },
};

export default nextConfig;
