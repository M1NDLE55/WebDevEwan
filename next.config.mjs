/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.webdevewan.com" },
      { protocol: "https", hostname: "www.eft-toolset.com" },
      { protocol: "https", hostname: "wildeyeconservation.org" },
    ],
  },
};

export default nextConfig;
