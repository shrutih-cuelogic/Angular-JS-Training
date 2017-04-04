angular.module('profile')
    .controller('profileCtrl', ['$scope', '$rootScope', '$location', '$stateParams', 'serverLocalStorageService', 'profileService', ProfileController])

function ProfileController($scope, $rootScope, $location, $stateParams, serverLocalStorageService, profileService) {

    $scope.employees = profileService.getEmp();

    $rootScope.$on('$stateChangeSuccess', function() {
        $rootScope.current_id = $stateParams.id;
    });

    $scope.newField = {};
    $scope.editing = false;

    $scope.editProfile = function(field) {
        $scope.editing = $scope.employees.indexOf(field);
        $scope.newField = angular.copy(field);
    }

    $scope.cancel = function(index) {
        if ($scope.editing !== false) {
            $scope.employees[$scope.editing] = $scope.newField;
            $scope.editing = false;
        }       
    };

    $scope.deleteProfile = function(index) {
        // var employees = profileService.deleteProfile(username);
        var confirmDelete = confirm("Are you sure want to delete?");
        if (confirmDelete) {
            $scope.employees.splice(index, 1)
        }
    };

    $scope.logout = function() {
        serverLocalStorageService.clearAll();
        $location.path('/login');
        serverLocalStorageService.get('tokenid');
    };

};
