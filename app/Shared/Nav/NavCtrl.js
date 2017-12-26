'use strict';
/**
 * Controller for Navigation menu
 * @author Ashish Patel
 */
appControllers.controller('NavCtrl', ['$scope', 'ProvidersDataService', 'NavNotifyingService', function($scope, ProvidersDataService, NavNotifyingService){

    /*
     * Loads search autocomplete data
     */
    $scope.autoComplete = function(searchText) {
        var data = ProvidersDataService.getProviders();
        var filtered = [];
        var name=null;
        var obj = {};
        for(var i=0; i<data.length; i++){
            name = ProvidersDataService.getProviderFullName(data[i]);
            if(searchText == null || searchText == "" || name.toUpperCase().indexOf(searchText.toUpperCase()) > -1
                || data[i].specialty.toUpperCase().indexOf(searchText.toUpperCase()) > -1) {
                obj = data[i];
                obj["fullName"] = name;
                filtered.push(obj);
            }
        }
        return filtered;
    };

    /*
     * Triggered when user searches system from search box on App View
     */
    $scope.search = function(dataObject){
        NavNotifyingService.notifySearch(dataObject);
    };
}]);
