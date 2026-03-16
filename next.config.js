/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  allowedDevOrigins: [
    '91d1869c-4276-4f3a-95fd-7ff635729569-00-3e4b9yuvtyve5.worf.replit.dev',
    '*.worf.replit.dev',
    '*.replit.dev',
  ],
};

module.exports = nextConfig;
