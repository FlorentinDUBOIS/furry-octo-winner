furryApp.config(function($stateProvider, $resourceProvider) {

  $resourceProvider.defaults.stripTrailingSlashes = false;

  const STATES = [
    {
      name: 'loginForm',  
      url: '/login',
      component: 'loginFormComponent'
    }, {
      name: 'articleList',  
      url: '/article',
      component: 'articlesComponent',
      resolve: {
        articles: function($Article) {
          return $Article.query().$promise;
        }
      }
    }, {
      name: 'articleDetails',  
      url: '/article/:articleId',
      component: 'articleDetailsComponent',
      resolve: {
        Article: function($Article, $transition$) {
          return $Article.get({
            articleId: $transition$.params().articleId
          }).$promise;
        }
      }
    }
  ];

  for(let state of STATES) {
      $stateProvider.state(state);
  }
});
