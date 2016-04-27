var voteApp = angular.module('voteApp', []);
var imageRowSplit = [];
var rowCount;

voteApp.controller('mainController', function($scope, $http) {

  var apiUrl = 'http://voteupordown.herokuapp.com/';

  // Simple GET request example:
  $http({
    method: 'GET',
    url: apiUrl
  }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.imagePath = "" + apiUrl + "/images/";
    $scope.carresults = response.data.allCars;
    //console.log($scope.carresults.length);
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    $scope.result = "ERROR!!!"
  });


});
