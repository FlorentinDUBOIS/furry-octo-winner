furryApp.factory('Product', ['$resource', function($resource) {

  return $resource('https://127.0.0.1:8080/api/article/:id');

}]);