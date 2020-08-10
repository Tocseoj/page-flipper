module.exports = {
  pwa: {
    name: process.env.VUE_APP_TITLE || 'Gluten Free Starter',
    manifestOptions: {
      background_color: '#1C1C1C',
    },
  },
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = process.env.VUE_APP_TITLE || 'Gluten Free Starter'
      return args
    })
  },
}
