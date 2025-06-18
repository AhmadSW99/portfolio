/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React StrictMode for better development experience
  reactStrictMode: true,
  
  // Optimize compilation
  compiler: {
    // Disable removing console.logs in production
    removeConsole: false,
  },
  
  // Enable SWC minification for faster builds
  swcMinify: true,
  
  // Configure webpack for faster development builds
  webpack: (config, { dev, isServer }) => {
    // Enable fast refresh only in development
    if (dev && !isServer) {
      config.cache = true;
    }
    
    return config;
  },
  
};

module.exports = nextConfig;