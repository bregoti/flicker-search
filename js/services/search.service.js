angular.module('flickrApp')
	.service('SearchService', function($http) {
		var self = this;

        var key = 'dc54bcebd29fa40bcf5d5e21ce80c684';
    
        // get photo by id
		self.getPhoto = function(photoId) {
            var photoUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key='+key+'&photo_id='+photoId+'&format=json&nojsoncallback=1';
            return $http.get(photoUrl);
		}
        
        // get all photos
        self.getAllPhotosByTag = function(tag) {
            console.log("in service : tag ::"+tag);
            var tagUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+key+'&tags='+tag+'&text='+tag+'&privacy_filter=1&safe_search=1&per_page=10&format=json&nojsoncallback=1';
            //console.log(tagUrl);
            return $http.get(tagUrl);
		}
        
        self.get
	});