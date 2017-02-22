'use strict';


angular.module('todoapp', [
	// 'ui.router',
    'auth'
    // 'profile',
    // 'todo',
    // 'directives',
    // 'services'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        //  $stateProvider.otherwise({
        //     redirectTo: '/home'
        // });
    }])
    .run(['$rootScope', '$state', '$stateParams', function ($rootScope,   $state,   $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $state.go('home');
    }]);