furryApp.factory('$User', ['$resource', function($http) {
  
  return {
      login: (username, password) => {
        return new Promise((resolve, reject) => {
          return $http.post('/api/users', {
              username,
              password
          })
          .then((res) => {
            localStorage.setItem('logged', res.data.jwt );  
            resolve();
          })
          .catch((err) => {
            console.error('Something gone wrong when try to log in', err);
            reject();
          });
        });
      },

      isLoggedIn: () => {
        let test = localStorage.getItem('logged');
        if (!test) {
            return false;
        } else {
            return true;
        }
      },

      logout: () => {
        if (isLoggedIn()) {
          localStorage.removeItem('logged');
        }
      },

      register: (user) => {
        return $http.post('/api/users', {
            username,
            password
        })
        .then((res) => {
          localStorage.setItem('logged', true);  
        })
        .catch((err) => {
          console.error('Something gone wrong when try to log in', err);
        });
      }
  }
}]);