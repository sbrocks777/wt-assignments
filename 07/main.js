var app = angular.module("myApp", []);

app.controller("myController", function ($scope) {
  $scope.items = [];
  $scope.id = null;
  $scope.onSubmit = () => {
    data = {
      item: $scope.item,
      description: $scope.description,
      quantity: $scope.quantity,
      price: $scope.price,
    };

    if($scope.id !== null) {
      console.log($scope.id)
      $scope.items[$scope.id] = data;
    }
    $scope.items.push(data);
    $("#exampleModal").modal("hide");
  };

  $scope.edit = function (index) {
    $scope.id = index;
    $scope.item = $scope.items[index].item;
    $scope.description = $scope.items[index].description;
    $scope.quantity = $scope.items[index].quantity;
    $scope.price = $scope.items[index].price;
  };

  $scope.delete = function (index) {
    $scope.items.splice(index, 1);
  };

  $scope.reset = function () {
    document.querySelector('form').reset();
    // $scope.item = "";
    // $scope.description = "";
    // $scope.quantity = 0;
    // $scope.price = 0;
  };
});
