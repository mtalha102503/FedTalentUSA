import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization stays OFF (Vercel cost rule, same as VisaTalentUSA).
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
