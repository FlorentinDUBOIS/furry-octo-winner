furryApp.factory('$User', ['$resource', function($http) {
  
  return {
      login: (username, password) => {
        return $http.post('/api/users', {
            username,
            password
        })
        .then((res) => {
          sessionStorage.setItem('logged', true);  
        })
        .catch((err) => {
          console.error('Something gone wrong when try to log in', err);
        });
      },

      isLoggedIn: () => {
        let test = sessionStorage.getItem('logged');
        if (!test) {
            return false;
        } else {
            return true;
        }
      }
  }
}]);