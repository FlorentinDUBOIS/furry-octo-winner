furryApp.factory('authHttpInterceptor', (jwtHelper) => {
  return {
    request: function (config) {

      // Prevent sending token to external resources
      if (!config.url.startsWith('http')) {
        let token = localStorage.getItem('lwt');
        if (!!token) {
          config.headers.Authorization = `JWT ${token}`;
        }
        console.log(config)
      }
      return config;
    }
  };
});
