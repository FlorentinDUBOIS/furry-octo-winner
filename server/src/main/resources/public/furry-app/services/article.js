(function() {
  angular
    .module('furryApp')
    .factory('$Article', $Article)

  function $Article($resource, API) {
    return $resource(`${ API }/api/article/:articleId`, null, {
      query:  {
        method: 'GET',
        isArray: true
      },

      get: {
        method: 'GET'
      }
    });
  }

  $Article.$inject = ['$resource', 'API']
} ())
