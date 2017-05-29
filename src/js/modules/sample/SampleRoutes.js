angular.module('SampleModule').config(['$stateProvider',
    function ($stateProvider) {

        var helloState = {
            name: 'hello',
            url: '/',
            template: '<h3>Hello state</h3>'
        }

        var testState = {
            name: 'test',
            url: '/test',
            template: '<h3>Test state</h3>'
        }

        $stateProvider.state(helloState);
        $stateProvider.state(testState);
    }
]);