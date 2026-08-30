import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/LearnHub-AI",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;