/*

var myApp = angular.module('myApp', []);
myApp.factory('Data', function() {
    return {message: "I'm data from a service"};
});

function FirstCtrl($scope, Data){
  $scope.data = Data;
}

function SecondCtrl($scope, Data){
  $scope.data = Data;

  $scope.reversedMessage = function () {
    return $scope.data.message.split("").reverse().join("");
  };
}

*/

var myApp = angular.module('myApp', []);
myApp.factory('Data', function() {
    return {message: "I'm data from a service"};
});

myApp.filter('reverse', function () {
  return function (text) {
    return text.split("").reverse().join("");
  }
})


function FirstCtrl($scope, Data){
  $scope.data = Data;
}

function SecondCtrl($scope, Data){
  $scope.data = Data;

  $scope.reversedMessage = function(message) {
    return message.split("").reverse().join("");
  };
}

myApp.controller("FirstCtrl", FirstCtrl);

myApp.controller("SecondCtrl", SecondCtrl);
