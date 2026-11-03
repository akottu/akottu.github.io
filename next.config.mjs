/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for GitHub Pages.
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
