
//setup angular
var app = angular.module('scotch-todo', ['ionic']);
app.config(function () {
});

app.controller('main', function ($scope, $ionicModal) { //store the entities name in a variable var taskData = 'task';

  $scope.tasks = [];
  $scope.task = {
    completed: false
  };

  $scope.createTask = function () {
    //creates a new task
    $scope.tasks.push($scope.task);
    $scope.task = {
      completed: false,
      title: "",
      content: ""
    };
  };

  $scope.removeTask = function (index) {
    //removes a task
    $scope.tasks.splice(index, 1);
  };
});
