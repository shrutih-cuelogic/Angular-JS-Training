(function() {
    'use strict';

    angular.module('auth')
        .config(['$stateProvider', function($stateProvider) {

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: '/src/modules/auth/templates/home.html'
                });
        }]);

})();
