const furryApp = angular.module('furryApp', [
  'ngResource',
  'ngMaterial',
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

furryApp.run((jwtHelper, $User, $transitions, $state) => {
  // Remove expired tokens
  let token = localStorage.getItem('jwt');
  if(!!token) {
    if (jwtHelper.isTokenExpired(token)) {
      localStorage.removeItem('jwt');
      return null;
    }
  }

  // Prevent user to go on login required state
  $transitions.onStart({
    to: function (state) {
      // if state need logged in user
      return state.data != null && state.data.authRequired === true;
    }
  }, () => {
    if (!$User.isLoggedIn()) {
      return $state.target("loginForm");
    }
  });

});
