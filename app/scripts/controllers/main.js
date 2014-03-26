'use strict';

var reviewsController = angular.module('reviewsController', []);

reviewsController
  .controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
  	$http.get('/reviews')
  		.success(function(data){
  			//out angular view expects an array
  			if(typeof data.length == 'undefined'){
  				data = [data];
  			}

  			$scope.upcomingReviews = data;
  		})
  		.error(function(data){
  			console.log('Error: ' + data);
  		});
 }]);

reviewsController
  .controller('ReviewCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    var reviewId = $routeParams.reviewid;

    $http.get('/topics/' + reviewId)
      .success(function(data){
        $scope.topics = data.Topics;
        $scope.currentReview = data.Review;
      })
      .error(function(data){
        console.log('Error: ' + data);
      });
}]);