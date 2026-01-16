/** @type {import('next').NextConfig} */
const repo = 'MagicMujerES'

const nextConfig = {
  output: 'export',

  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,

  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
