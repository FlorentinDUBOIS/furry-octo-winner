furryApp.factory('authHttpInterceptor', function () {
  return {
    request: function (config) {
      /*if (config.headers.Authorization === 'Bearer') {
        config.headers.Authorization = 'Bearer ' + btoa(OAuth.accessToken);
      }*/
      let token = localStorage.getItem('logged');
      if (!!token) {
        config.headers.Authorization = `JWT ${token}`;
      }
      return config;
    }
  };
});