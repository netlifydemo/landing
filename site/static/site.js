angular.module('netlifyApp', []).controller('howCtrl', ['$scope', '$timeout', function($scope, $timeout) {


}]).controller('modalCtrl', ['$scope', function($scope) {
  $scope.signup = function() {
    $scope.modal = true;
  }

}]);
