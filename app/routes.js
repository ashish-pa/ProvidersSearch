/**
 * Global app configuration for url states with associated view locations and controllers
 * @author Ashish Patel
 */
app.config(function($stateProvider, $urlRouterProvider) { //setup routing between pages
	
		$stateProvider
		    .state('home', {
		    	url: '/home',
		    	views:{
		            '':{
		                templateUrl: 'app/Home/_Home.html',
		                controller: 'HomeCtrl'
		            },
                    'nav@home':{
                        templateUrl: 'app/Shared/Nav/_NavView.html',
						controller: 'NavCtrl'
                    },
                    'provider-details@home':{
                        templateUrl: 'app/ProviderDetails/_ProviderDetailsView.html'
                    }
	    	}
	    });
	
		//by default send to /home
		$urlRouterProvider.when('', 'home');
	});