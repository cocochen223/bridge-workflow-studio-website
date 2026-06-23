import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "bridgeworkflowstudio.ca" }],
        destination: "https://bridgeworkflowstudio.com/:path*",
        permanent: true
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.bridgeworkflowstudio.ca" }],
        destination: "https://bridgeworkflowstudio.com/:path*",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
