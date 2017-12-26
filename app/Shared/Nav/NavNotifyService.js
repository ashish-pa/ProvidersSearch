/**
 * Notifying service for Nav bar when user searches from it to notify controllers based on which subscribe to it
 * @author Ashish Patel
 */
appServices.service('NavNotifyingService', ['$rootScope', function($rootScope){
    return {
        subscribeSearch: function(scope, callback) {
            var handler = $rootScope.$on('nav-search-event', callback);
            scope.$on('$destroy', handler);
        },
        notifySearch: function(search) {
            $rootScope.$emit('nav-search-event', search);
        }
    };
}]);