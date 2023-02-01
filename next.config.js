/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.dribbble.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.png$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  swcMinify: true,
};

module.exports = nextConfig;
