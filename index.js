var app = angular.module("ben", []);

app.controller("MyController", function($scope) {
  $scope.contractors = [];
  $scope.getContractor = function() {
    var contractor = {};
    contractor.name = $scope.name;
    contractor.rate = $scope.rate;
    $scope.contractors.push(contractor);

    $scope.name = null;
    $scope.rate = null;
  }
});
