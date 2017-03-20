(function() {
  angular
    .module('furryApp')
    .factory('authHttpInterceptor', authHttpInterceptor)

  function authHttpInterceptor(jwtHelper) {
    return {
      request(config) {
        if (!config.url.startsWith('http')) {
          let token = localStorage.getItem('lwt')

          if (token) {
            config.headers.Authorization = `JWT ${ token }`
          }
        }

        return config
      }
    }
  }

  authHttpInterceptor.$inject = ['jwtHelper']
} ())
