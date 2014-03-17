'use strict';

angular.module('bratsApp')
  .controller('MainCtrl', function ($scope, $http) {
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
    
  });
