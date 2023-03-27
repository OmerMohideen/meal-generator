/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: { 
	  domains: ['www.themealdb.com']
  }
}

module.exports = nextConfig
