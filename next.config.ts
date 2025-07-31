import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.unsplash.com', 'avatars.githubusercontent.com', 'cdn.sanity.io', 'res.cloudinary.com'],  //whitelist domains for image optimization -> website names from where we add images
  }
};

export default nextConfig;
