import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "almzv.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "static.pullandbear.net",
        port: "",
      },
    ],
  },
};
export default withNextIntl(nextConfig);
