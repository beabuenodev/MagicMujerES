/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  output: "export",
  basePath: isGithubPages ? "/MagicMujerES" : "",
  assetPrefix: isGithubPages ? "/MagicMujerES/" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
