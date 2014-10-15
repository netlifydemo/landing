angular.module('netlifyApp', []).controller('howCtrl', ['$scope', '$timeout', function($scope, $timeout) {


}]).controller('modalCtrl', ['$scope', '$timeout', function($scope, $timeout) {
  $scope.signup = function($event) {
    $timeout(function() {
      $scope.modal = true;
    }, 1);
  }

  $scope.closeModal = function($event) {
    console.log($event)
    $scope.modal = false;

  }

}]);
