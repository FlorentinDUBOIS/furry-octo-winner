furyApp
.factory('Product', function($resource) {
  return $resource('/api/product/:id'); // Note the full endpoint address
});