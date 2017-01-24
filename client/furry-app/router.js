const STATES = [
  {
    name: 'hello',  
    url: '/hello/{userId}',
    component: 'helloComponent',
    resolve: {
        user: ($stateParams) => {
            return new Promise((resolve, reject) => {
                console.log($stateParams);
                resolve($stateParams.userId);
            });
        }
    }
  }
];

furryApp.config(function($stateProvider) {

    for(let state of STATES) {
        $stateProvider.state(state);
    }
});
