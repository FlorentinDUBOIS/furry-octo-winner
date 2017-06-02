module.exports = {
  staticFileGlobs: [
    'furry-app/**/*',
    'libs/**/*.js',
    'index.html',
    'manifest.json'
  ],

  maximumFileSizeToCacheInBytes: 3145728,

  runtimeCaching: [{
    urlPattern: /fonts\.googleapis\.com|secure\.gravatar\.com/,
    handler: 'cacheFirst'
  }]
}