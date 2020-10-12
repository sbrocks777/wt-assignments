var app = angular.module("myApp", []);
app.controller("myController", function ($scope) {
  $scope.subjects = [
    {
      name: "physics",
      obmarks: 76,
      outof: 100,
    },
  ];

  $scope.add = function () {
    $scope.subjects.push({
      name: "",
      obmarks: 0,
      outof: 0,
    });
  };

  $scope.remove = function (index) {
    $scope.subjects.splice(index, 1);
  };

  $scope.total = () => {
    let tobm = 0;
    let tofm = 0;
    let result = 0;
    let grade = '';
    angular.forEach($scope.subjects, (subject) => {
      tobm += subject.obmarks;
      tofm += subject.outof;
    });
    result = tobm / tofm * 100;

    if(result < 35) {
        grade = 'F';
    } else if (result <= 60 && result >= 35) {
        grade = "C";
    } else if (result <= 80 && result >= 60) {
        grade = "B";
    } else if (result <= 100 && result >= 80) {
        grade = "A";
    }
    return { tobm, tofm, grade, result };
  };
});
