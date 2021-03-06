(function () {
  angular
    .module('furryApp')
    .config(RouterConfig)

  function RouterConfig($stateProvider, $resourceProvider, $translateProvider, $uiRouterProvider, $httpProvider, $urlRouterProvider, languages, $sceDelegateProvider) {

    // Trusted resources
    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Notice the difference between * and **.
      'https://www.gravatar.com/**'
    ]);

    // I18n
    $translateProvider
      .useStaticFilesLoader({
        prefix: 'furry-app/langs/locale-',
        suffix: '.json'
      })
      .determinePreferredLanguage()
      .fallbackLanguage('fr_FR')
      .registerAvailableLanguageKeys(languages)
      .useSanitizeValueStrategy('escape');

    // Auth
    $httpProvider.interceptors.push('authHttpInterceptor');

    // Router
    $resourceProvider.defaults.stripTrailingSlashes = false;
    $urlRouterProvider.when('', '/')

    const states = [
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
        articles: ['$Article', function($Article) {
          return $Article.query().$promise;
        }]
      }
    }, {
      name: 'articleDetails',
      url: '/article/:articleId',
      component: 'articleDetailsComponent',
      resolve: {
        article: ['$Article', '$transition$', function ($Article, $transition$) {
          return $Article.get({
            articleId: $transition$.params().articleId
          }).$promise;
        }]
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
      url: '/contact-us',
      component: 'contactComponent'
    }, {
      name: 'homePage',
      url: '/',
      component: 'homePageComponent'
    }, {
      name: 'special-offer',
      url: '/special-offer',
      component: 'specialOfferComponent'
    }, {
      name: 'myAccount',
      url: '/my-account',
      component: 'myAccountComponent',
      resolve: {
        authorize: ($User, $state) => {
          if (!$User.isLoggedIn()) {
            $state.go('loginForm')
          }
        }
      }
    }]
    states.forEach(state => $stateProvider.state(state))
  }

  RouterConfig.$inject = ['$stateProvider', '$resourceProvider', '$translateProvider', '$uiRouterProvider', '$httpProvider', '$urlRouterProvider', 'languages', '$sceDelegateProvider']
} ())
