angular.module('auth', [])
    .controller('loginCtrl', ['$scope', LoginCntrl])

function LoginCntrl($scope) {
    // $scope.error = "";

    $scope.login = function() {
        $scope.user = {
            email: "shruti@gmail.com",
            password: "1234"
        };
        if ($scope.email == user.email && $scope.password == user.password) {
            alert("Succesfully login");
        } else {
            alert("Username and Password is wrong");
        }
    }
};