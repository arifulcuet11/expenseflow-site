import type { NextConfig } from "next";

const API_URL = process.env.API_URL ?? "http://127.0.0.1:8000";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  // Custom domain — no basePath needed
  basePath: "",
  images: { unoptimized: true },
  // Rewrites are not supported with static export — contact form POSTs directly to the backend.
  ...(isGithubPages
    ? {}
    : {
        async rewrites() {
          return [
            { source: "/api/:path*", destination: `${API_URL}/api/:path*` },
          ];
        },
      }),
};

export default nextConfig;
