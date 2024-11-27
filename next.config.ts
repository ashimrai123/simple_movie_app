import type { NextConfig } from "next";

// const hostnames = [

// ];

const nextConfig: NextConfig = {
  images: {
    // remotePatterns: hostnames.map((hostname) => ({
    //   protocol: "https", // Ensures HTTPS protocol for all domains
    //   hostname, // Maps each hostname
    //   pathname: "/**", // Allows any path on the hostname
    //   // port can be omitted if empty, default ports are used
    // })),
    domains: ["image.tmdb.org", "t4.ftcdn.net"],
  },
};

export default nextConfig;
