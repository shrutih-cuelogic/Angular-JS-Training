(function() {
    'use strict';

    angular.module('auth')
        .config(['$stateProvider', function($stateProvider) {

            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: '/src/modules/auth/templates/login.html'
                });
        }]);

})();
