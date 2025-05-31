/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Enable static site generation
  assetPrefix: './',
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  
  // SEO optimizations
  compress: true,
  
  // Remove server-side features for static export
  // These headers will be handled by your web server instead
  async headers() {
    return []
  },
  
  async redirects() {
    return []
  },
  
  async rewrites() {
    return []
  },
  
  // Disable server-side features
  experimental: {
    scrollRestoration: true,
  },
  
  // Environment variables for build optimization
  env: {
    CUSTOM_KEY: 'jonathan-chang-portfolio',
  },
};

export default nextConfig;
