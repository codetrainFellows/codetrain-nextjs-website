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
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
      {
        protocol: "https",
        hostname: "img-prod-cms-rt-microsoft-com.akamaized.net",
      },
      {
        protocol: "https",
        hostname: "www.completefarmer.com",
      },
      {
        protocol: "https",
        hostname: "meltwater.org",
      },
      {
        protocol: "https",
        hostname: "turntabl.io",
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
