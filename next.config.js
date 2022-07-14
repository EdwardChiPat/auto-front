module.exports = async (phase, { defaultConfig }) => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    swcMinify: true,
  }
  return nextConfig
}