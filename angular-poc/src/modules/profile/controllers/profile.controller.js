angular.module('profile')
    .controller('profileCtrl', ['$scope', '$rootScope', '$location', '$stateParams', 'serverLocalStorageService', 'profileService', ProfileController])

function ProfileController($scope, $rootScope, $location, $stateParams, serverLocalStorageService, profileService) {

    $scope.employees = profileService.getEmp();

    $rootScope.$on('$stateChangeSuccess', function() {
        $rootScope.current_id = $stateParams.id;
    });
    $scope.logout = function() {
        serverLocalStorageService.clearAll();
         $location.path('/login');
         serverLocalStorageService.get('tokenid');
    };

};
