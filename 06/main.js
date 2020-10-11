var app = angular.module("myCalc", []);

app.directive("stringToNumber", function () {
  return {
    require: "ngModel",
    link: function (scope, element, attrs, ngModel) {
      ngModel.$parsers.push(function (value) {
        return "" + value;
      });
      ngModel.$formatters.push(function (value) {
        return parseFloat(value);
      });
    },
  };
});

app.controller("calcCtrl", function ($scope) {
  $scope.add_func = function add_func() {
    var a = Number($scope.first || 0);
    var b = Number($scope.second || 0);
    $scope.result = a + b;
  };

  $scope.subt_func = function () {
    var a = Number($scope.first || 0);
    var b = Number($scope.second || 0);
    $scope.result = a - b;
  };

  $scope.multi_func = function () {
    var a = Number($scope.first || 0);
    var b = Number($scope.second || 0);
    $scope.result = a * b;
  };

  $scope.div_func = function () {
    var a = Number($scope.first || 0);
    var b = Number($scope.second || 0);
    $scope.result = a / b;
  };

  $scope.clear = function () {
    $scope.first = $scope.second = $scope.result = 0;
  }
});
