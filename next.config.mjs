/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    // domains: ["media-assets.swiggy.com", "paul-india.com/wp-content/uploads"],
    domains: ["localhost"],
    remotePatterns: [
      // { hostname: "www.paul-india.com", path: "/wp-content/uploads/**/*" },
      // {
      //   protocol: "https",
      //   hostname: "paul-india.com",
      //   pathname: "/wp-content/uploads/**/*",
      //   port: "",
      // },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/doe5yz1ml/image/upload/**",
        port: "",
      },
    ],
  },
};

// export default {
//   images: {
//     domains: ['media-assets.swiggy.com'],
//   },
// };

export default nextConfig;
