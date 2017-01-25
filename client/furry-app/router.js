furryApp.config(
  ($stateProvider, $resourceProvider, $translateProvider, $uiRouterProvider, $httpProvider) => {

  // I18n
  $translateProvider.useStaticFilesLoader({
    prefix: 'furry-app/langs/locale-',
    suffix: '.json'
  });
  $translateProvider.determinePreferredLanguage();

  // Auth
  $httpProvider.interceptors.push('authHttpInterceptor');

  // Router
  $resourceProvider.defaults.stripTrailingSlashes = false;
  const STATES = [
    {
      name: 'registerForm',  
      url: '/register',
      component: 'registerFormComponent'
    }, {
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
