furryApp.factory('$Article', ['$resource', function($resource) {

  return $resource('http://127.0.0.1:8080/api/article/:articleId', null, {
    'query':  {
      method:'GET', 
      isArray:true
    },
    'get': {
      method:'GET' 
    }
  });
}]);