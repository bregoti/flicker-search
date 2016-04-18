(function () {
	'use strict';
	 var flickrApp = angular.module('flickrApp');
	
	 flickrApp.config(['$stateProvider','$httpProvider','$urlRouterProvider','$ocLazyLoadProvider', 
	       	         function($stateProvider, $httpProvider, $urlRouterProvider, $ocLazyLoadProvider) {
	
		 //$httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
		 
		 $urlRouterProvider.otherwise('/');
		 
		 $ocLazyLoadProvider.config({debug: false});
	 
		 $stateProvider
		 .state('app', {
			 url:	"/",
			 templateUrl:	"pages/search.results.html",
			 controller: 'SearchController',
             resolve: {
				 loadPlugin: function($ocLazyLoad) {
					 return $ocLazyLoad.load({
						name: 'flickrApp',
						files: ['js/controllers/search.controller.js',
                               'js/services/search.service.js'] 
					 });
				 }
			 }
		 })
		 
		
	 }]);
	 
	 flickrApp.run(['$rootScope', function ($rootScope) {
		  
		 	
	    }]);
	   
	 
})();