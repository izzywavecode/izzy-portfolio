/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The old résumé is no longer published; keep shared links working.
      { source: '/Israel_Romero_Resume_2026.pdf', destination: '/#founder', permanent: true },
    ]
  },
}

module.exports = nextConfig
