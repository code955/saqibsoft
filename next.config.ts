import type { NextConfig } from "next";

// GitHub Pages hosts this project at /saqibsoft. Local dev keeps an empty
// base path so `npm run dev` still works at the site root.
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/saqibsoft" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
