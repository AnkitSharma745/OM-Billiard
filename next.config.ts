import type { NextConfig } from "next";
import path from "node:path";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const imageRemotePatterns = supabaseUrl
  ? (() => {
      const url = new URL(supabaseUrl);
      return [{
        protocol: url.protocol.slice(0, -1) as "http" | "https",
        hostname: url.hostname,
        port: url.port,
        pathname: "/storage/v1/object/public/**",
      }];
    })()
  : [];

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.resolve(process.cwd()),
  images: {
    remotePatterns: imageRemotePatterns,
  },
};

export default nextConfig;
