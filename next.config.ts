import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

// Dev hardening: silence malformed source maps from some dependencies and
// avoid Pages Router fallbacks. This does not affect production builds.
const nextConfig: NextConfig = {
  reactStrictMode: false,
  productionBrowserSourceMaps: false,
  // Silence Next 16 warning by explicitly opting into Turbopack with an empty config.
  // We still keep a minimal webpack hook; Next will ignore it when Turbopack runs.
  turbopack: {},
  // As a last-resort guard for malformed source maps in node_modules, disable
  // devtool only in development. This prevents Next/Turbopack from trying to
  // parse broken sourceMappingURL comments and emitting noisy errors.
  webpack: (config, { dev }) => {
    if (dev && isDev) {
      // Disable source maps in dev to avoid "Invalid source map" spam
      // If you prefer dev source maps, comment this out once upstream is fixed.
      config.devtool = false;
    }
    return config;
  },
};

export default nextConfig;
