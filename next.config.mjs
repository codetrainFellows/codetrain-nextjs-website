/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Example remote patterns (you can adjust or remove these as needed)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/fonts/:path*",
        destination: "/fonts/:path*", // keep the destination same as source
      },
    ];
  },
};

export default nextConfig;
