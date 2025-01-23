/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com", // Use i.imgur.com for direct image links
      },
      {
        protocol: "https",
        hostname: "images.pexels.com", // Use www.pexels.com for direct image links
      },
    ],
  },
};

export default nextConfig;
