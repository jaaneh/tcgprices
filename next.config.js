module.exports = {
  webpack(config) {
    return config
  },
  future: {
    webpack5: true
  },
  poweredByHeader: false,
  devIndicators: {
    autoPrerender: false
  },
  images: {
    domains: [
      'tcgplayer-cdn.tcgplayer.com',
      'images.pokemontcg.io',
      'pbs.twimg.com',
      'static-cdn.jtvnw.net'
    ]
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate'
          }
        ]
      }
    ]
  }
}
