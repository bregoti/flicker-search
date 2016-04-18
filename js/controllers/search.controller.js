angular.module('flickrApp')
.controller('SearchController',['$rootScope', '$scope', '$state', '$stateParams','SearchService',
   function($rootScope, $scope, $state, $stateParams, SearchService){
		
	console.log("In the Search Controller");
   
       $scope.photosArr = [];
       $scope.photos = {};
       $scope.tag = "USA";
       
       function fetchPhoto(id) {
           SearchService.getPhoto(id)
			.success(function(data, status) {
				console.log(data.photo);
				//$scope.photosArr.push(data.photo);
				console.log(" Getting Photo Info is successful");
			})
			.error(function(data, status) {
				console.log("Error in Retrieving the photo information ");
				$scope.error = data;
			});
       }
       
    // fetch Search results by tag
    $scope.fetchSearchResults = function() {
        var tag = $scope.tag;
   	    SearchService.getAllPhotosByTag(tag)
			.success(function(data, status) {
				console.log(data);
                $scope.photos = data.photos.photo;
              console.log(" Getting Search Results by tag is successful");
			})
			.error(function(data, status) {
				console.log("Error in Retrieving the search results.");
				$scope.error = data;
			});
   	 
    }
   	 
   	 $scope.fetchSearchResults();
       
  
    //TODO: fetch search results by tag and sort type
       
	
}]);