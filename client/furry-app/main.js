const furryApp = angular.module('furryApp', [
  'ngResource',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngParseExt',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.router',
  'pascalprecht.translate',
  'angular-jwt'
]);

furryApp.run((jwtHelper) => {
  // Remove expired tokens
  let token = localStorage.getItem('jwt');
  if(!!token) {
    if (jwtHelper.isTokenExpired(token)) {
      localStorage.removeItem('jwt');
      return null;
    }
  }
});
