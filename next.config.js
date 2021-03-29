module.exports = {
  webpack(config) {
    return config
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
  }
}