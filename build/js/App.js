var app = angular.module('App', ['SampleModule']);

angular.module('App').run([function () {
    console.log('App');
}]);

angular.module('App').controller('Controller', function ($scope) {
    $scope.message = 'Hello! ';
});