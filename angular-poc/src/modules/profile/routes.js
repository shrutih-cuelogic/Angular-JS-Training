(function() {
    'use strict';

    angular.module('profile')
        .config(['$stateProvider', function($stateProvider) {

            $stateProvider
                .state('profile', {
                    url: '/profile',
                    templateUrl: '/src/modules/profile/templates/profile.html',
                    controller: 'profileCtrl'
                })
        }]);

})();
