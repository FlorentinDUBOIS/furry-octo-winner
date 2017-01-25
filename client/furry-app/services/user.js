furryApp.factory('$User', ['$resource', function($http) {
  
  return {

      /**
       * Send user and password to api
       * store JWT if success
       * @param {string} username Email of user
       * @param {string} password Password of user
       * @return {Promise} 
       */
      login: (username, password) => {
        return new Promise((resolve, reject) => {
          return $http.post('/api/user', {
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

      /**
       * Check if current user is logged in
       * @return {boolean} user is logged?
       */
      isLoggedIn: () => {
        let test = localStorage.getItem('logged');
        if (!test) {
            return false;
        } else {
            return true;
        }
      },

      /**
       * Remove stored token
       */
      logout: () => {
        if (isLoggedIn()) {
          localStorage.removeItem('logged');
        }
      },

      /**
       * Register a new user
       * @param {Object} user Object with all user model properties
       * @return {Promise} resolved when user is created
       */
      register: (user) => {
        return new Promise((resolve, reject) => {
          return $http.post('/api/user', {user})
          .then((res) => {
            resolve();
          })
          .catch((err) => {
            console.error('Something gone wrong when try to register in', err);
          });
        });
      }
  }
}]);