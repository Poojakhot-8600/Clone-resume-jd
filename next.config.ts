import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: "standalone",
  turbopack: {
    root: path.resolve(__dirname),
  },
  serverExternalPackages: ['pdf-parse', 'mammoth', '@prisma/client', 'pg'],
};

export default nextConfig;
