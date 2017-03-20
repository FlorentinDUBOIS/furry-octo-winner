furryApp.factory('$Article', ['$resource', function($resource) {

  return $resource('/api/article/:articleId', null, {
    'query':  {
      method:'GET', 
      isArray:true
    },
    'get': {
      method:'GET' 
    }
  });
}]);