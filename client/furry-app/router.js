furryApp.config(
  ($stateProvider, $resourceProvider, $translateProvider, $uiRouterProvider, $httpProvider) => {

  // I18n
  $translateProvider
  .useStaticFilesLoader({
    prefix: 'furry-app/langs/locale-',
    suffix: '.json'
  })
  .determinePreferredLanguage()
  .fallbackLanguage('fr_FR')
  .useSanitizeValueStrategy('escape');

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
          articles: function ($Article) {
              return $Article.query().$promise;
          }
      }
    }, {
      name: 'articleDetails',
      url: '/article/:articleId',
      component: 'articleDetailsComponent',
      resolve: {
        article: function ($Article, $transition$) {
          return $Article.get({
            articleId: $transition$.params().articleId
          }).$promise;
        }
      }
    },{
      name: 'orderCart',
      url: '/order/cart',
      component: 'orderCartComponent',
      data: {
          authRequired: true
      }
    }, {
      name: 'contact',
      url: '/contactUs',
      component: 'contactComponent'
    }, {
      name: 'homePage',
          url: '/',
          component: 'homePageComponent'
      }, {
          name: 'specialOffer',
          url: '/specialOffer',
          component: 'specialOfferComponent'
      }, {
          name: 'myAccount',
          url: '/myAccount',
          component: 'myAccountComponent'
      }

  ];

  for (let state of STATES) {
    $stateProvider.state(state);
  }
});
