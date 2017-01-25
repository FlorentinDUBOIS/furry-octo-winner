furryApp.factory('authHttpInterceptor', (jwtHelper) => {
  return {
    request: function (config) {
      let token = localStorage.getItem('lwt');
      if (!!token) {
        config.headers.Authorization = `JWT ${token}`;
      }
      return config;
    }
  };
});