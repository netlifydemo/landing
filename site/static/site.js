angular.module('netlifyApp', []).controller('howCtrl', ['$scope', '$timeout', function($scope, $timeout) {


}]).controller('modalCtrl', ['$scope', '$timeout', function($scope, $timeout) {
  $scope.signup = function($event) {
    $timeout(function() {
      $scope.modal = true;
    }, 1);
  }

  $scope.closeModal = function($event) {
    for (var i in $event.path) {
      if ($event.path[i].classList && $event.path[i].classList.contains("modal")) { return; }
    }

    $scope.modal = false;
  }

}]);
