'use strict';
/**
 * Service for fetching provider data and utilities for formatting data
 * @author Ashish Patel
 */
appServices.factory('ProvidersDataService', ['$resource', function($resource) {
    var data = null;

    return {
        getProviders: getProviders,
        getProviderFullName: getProviderFullName,
        getOveralRating: getOveralRating
    };

    /*
     * Returns providers full name based on if middle name exists or not
     */
    function getProviderFullName(providerObject){
        var name = providerObject.prefix + " " +
                   providerObject.first + " " +
                  (providerObject.middle == undefined ? "":providerObject.middle)  + " " +
                   providerObject.last;
        return name;
    }

    /*
     * Calculates overall rating
     */
    function getOveralRating(data){
        var sumOfRatings = 0;
        for(var i=0; i<data.ratings.length; i++){
            sumOfRatings += data.ratings[i].rating;
        }
        var overallRating = Math.round( sumOfRatings/data.ratings.length * 10 ) / 10;
        data["overallRating"] = overallRating;
        return data;
    }

    /*
     * Calls node js backend to fetch data only if not retrieved, otherwise uses cached data
     */
    function getProviders() {
        if(data == null){
            data = setProviders().search({});
            data.$promise.then(function(){
                for(var i=0; i<data.length; i++){
                    getOveralRating(data[i]);
                }
            });
        }
        return data;
    }

    /*
     * API call to fetch provider data at /providers using GET method
     */
    function setProviders(){
        return $resource('/providers', {}, {
            search: {
                method: 'GET',
                params: {

                },
                url: '',
                isArray: true
            }
        });
    }
}]);