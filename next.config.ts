/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // export website
  basePath: process.env.NODE_ENV === "production" ? "/restaurant" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/restaurant/" : "",
  images: {
    unoptimized: true, // Désactive l'optimisation des images pour `next export`
  },
};

module.exports = nextConfig;