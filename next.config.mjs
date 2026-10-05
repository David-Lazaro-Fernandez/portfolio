import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx"],
  images: {
    formats: ["image/avif", "image/webp"],
    // The images change only on a deploy, and a deploy clears this cache. Keep each optimized file for 31 days.
    minimumCacheTTL: 2678400,
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
