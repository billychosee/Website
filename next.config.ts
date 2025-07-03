import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enables static exports
  images: {
    unoptimized: true, // Required for static exports
  },
  // Optional: If you're deploying to a subpath (e.g., your-site.netlify.app/subpath)
  // basePath: '/subpath',
  
  // Optional: Enable React Strict Mode
  reactStrictMode: true,
  
  // Optional: Configure page extensions if using non-standard file types
  // pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
};

export default nextConfig;