(function () {
  var app = angular.module("myApp", []);
  app.controller("interestCalculator", function ($scope) {
    $scope.principal = 0;
    $scope.rate = 0;
    $scope.time = 0;
    var grandTotal = 0;
    $scope.total = function () {
      grandTotal = $scope.principal * (1 + ($scope.rate / 100) * $scope.time);
      return grandTotal;
    };
    $scope.interest = function () {
      var interestOnly = grandTotal - $scope.principal;
      return interestOnly;
    };

    $scope.initValues = function () {
      $scope.principal = 0;
      $scope.time = 0;
      $scope.rate = 0;
      $scope.grandTotal = 0;
    };
  });
})();
