furryApp.factory('$User', function($http, jwtHelper) {
  
  return {

      /**
       * Send user and password to api
       * store JWT if success
       * @param {string} username Email of user
       * @param {string} password Password of user
       * @return {Promise}
       */
      tryLogin: (user) => {
        return new Promise((resolve, reject) => {
          return $http.post('http://127.0.0.1:8080/api/auth', user)
          .then((res) => {
            
            let jwt = res.data.token;
            if (!jwt) reject("No jwt received");
            localStorage.setItem('jwt', jwt);  
            localStorage.setItem('userId', jwtHelper.decodeToken(jwt).sub);
            resolve();
          })
          .catch((err) => {
            console.error('Something gone wrong when try to log in', err);
            reject(new Error(err));
          });
        });
      },

      /**
       * Check if current user is logged in
       * @return {boolean} user is logged?
       */
      isLoggedIn: () => {
        let test = localStorage.getItem('jwt');
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
          return $http.post('http://127.0.0.1:8080/api/user', user)
          .then((res) => {
            resolve();
          })
          .catch((err) => {
            console.error('Something gone wrong when try to register in', err);
            reject(new Error(err));
          });
        });
      },

      /**
       * Get informations based on existing userId from existing JWT
       * @return {Promise} Resolve user informations
       */
      getInformations: () => {
        return new Promise((resolve, reject) => {
        
          //if (!isLoggedIn()) return reject("User not logged in");
          let userId = localStorage.getItem('userId');
          if (!userId) return reject("User don't have JWT");
          
          $http.get(`http://127.0.0.1:8080/api/client/${userId}`).then((res) => {
            console.log(res.data);
            resolve(res.data);
          }).catch((err) => {
            reject(new Error('Failed to get Client informations'));
          });
        });
      }
  }
});