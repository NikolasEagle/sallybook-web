import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/auth/:path*",
        destination: `http://${process.env.NEXT_PUBLIC_HOST_SERVER_AUTH}:${process.env.NEXT_PUBLIC_PORT_SERVER_AUTH}/:path*`,
      },
      {
        source: "/api/:path*",
        destination: `http://${process.env.NEXT_PUBLIC_SERVER_API_HOST}:${process.env.NEXT_PUBLIC_SERVER_API_PORT}/:path*`,
      },
    ];
  },
};

export default nextConfig;
