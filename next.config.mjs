/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/tifftorrey",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
