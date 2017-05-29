var app = angular.module('App', [
    'ui.router',
    'SampleModule'
]);


angular.module('App').run([function () {
    console.log('App')
}]);

angular.module('App').config(['$urlRouterProvider', '$qProvider',
    function ($urlRouterProvider, $qProvider) {

        $qProvider.errorOnUnhandledRejections(false);

        $urlRouterProvider.when('/', '/');
        $urlRouterProvider.otherwise('/test');

    }
]);