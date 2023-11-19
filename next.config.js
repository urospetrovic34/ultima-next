/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lxlaycyqekumxskkhfup.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
