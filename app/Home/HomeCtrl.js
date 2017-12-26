'use strict';

/**
 * Controller for _Home.html & _ProviderDetailsView.html
 * @uathor Ashish Patel
 */
appControllers.controller('HomeCtrl', ['$scope', 'ProvidersDataService', 'NavNotifyingService', '$q', function($scope, ProvidersDataService, NavNotifyingService, $q) {
	//loads all data from service
	ProvidersDataService.getProviders().$promise.then(function (response){
        $scope.providersData = response;
    });


	//default tab selection set to Summary tab at index 0
    $scope.selectedTab = 0;

    /*
     * Triggered when user searches from Nav bar which notifies from NavCtrl.js to show provider details
     */
    NavNotifyingService.subscribeSearch($scope, function search(event, dataObject){
        $scope.viewDetails(dataObject);
	});

    /*
     * Shows detailed provider information eg. Summary, Locations & Directions, Ratings & Reviews
     */
	$scope.viewDetails = function(providerObject){
		$scope.selectedProvider = providerObject;
	};

	/*
	 * Triggered when user clicks on 'GET DIRECTIONS' button on detailed view of a provider
	 * Shows Locations & Directions tab by setting index at 1
	 */
	$scope.viewDirections = function(){
        $scope.selectedTab = 1;
	};

    /*
     * Triggered when user clicks on 'READ REVIEWS' button on detailed view of a provider
     * Shows Ratings & Reviews tab by setting index at 2
     */
    $scope.viewRatings = function(){
        $scope.selectedTab = 2;
    };
}]);