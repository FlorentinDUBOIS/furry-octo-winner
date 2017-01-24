furryApp.config(function($stateProvider) {


    const STATES = [
        {
            name: 'hello',  
            url: '/hello/{userId}',
            component: 'helloComponent',
            resolve: {
            user: function($stateParams) {
                return new Promise((resolve, reject) => {
                console.log($stateParams);
                resolve($stateParams.userId);
                });
            }
          }
        }
    ];

    for(let state of STATES) {
        $stateProvider.state(state);
    }
});
