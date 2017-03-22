(function () {
  angular
    .module('furryApp')
    .run(JWTRunner)

  function JWTRunner(jwtHelper, $User, $transitions, $state) {
    // Remove expired tokens
    let token = localStorage.getItem('jwt');
    if(!!token && jwtHelper.isTokenExpired(token)) {
      return localStorage.removeItem('jwt');
    }

    // Prevent user to go on login required state
    $transitions.onStart({
      to(state) {
        // if state need logged in user
        return state.data != null && state.data.authRequired === true;
      }
    }, function() {
      if (!$User.isLoggedIn()) {
        return $state.target("loginForm");
      }
    })
  }

  JWTRunner.$inject = ['jwtHelper', '$User', '$transitions', '$state']
} ())
