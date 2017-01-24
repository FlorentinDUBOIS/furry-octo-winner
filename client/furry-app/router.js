furryApp.config(function($stateProvider, $resourceProvider) {

  $resourceProvider.defaults.stripTrailingSlashes = false;

  const STATES = [
    {
      name: 'productList',  
      url: '/product',
      component: 'productsComponent',
      resolve: {
        productResource: 'productResource',
        products: function($Product) {
          return $Product().query().$promise;
        }
      }
    }
  ];

  for(let state of STATES) {
      $stateProvider.state(state);
  }
});
