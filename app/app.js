'use strict'; //for secure js - must define variables before use

/**
 * Set all libraries utilized and aliases for controllers, services
 * Set app theme color config and all svg icons to use throughout app
 * @author Ashish Patel
 */
var app = angular.module('ReviewApp', [
                'ui.router', 	//for routing
                'ngResource', 	//for services
                'ngMaterial', //angular material library
                'jkAngularRatingStars', //angular rating stars
                'Controllers',	//custom controllers
                'Services',   //custom services
    ])
    .config(['$mdThemingProvider','$mdIconProvider', function($mdThemingProvider, $mdIconProvider) { //app color config
        $mdThemingProvider.theme('default')
            .primaryPalette('blue', {
                'default':'500',
                'hue-1': '100',
                'hue-2': '600',
                'hue-3': 'A100'
            })
            .accentPalette('deep-orange',{
                'default':'500',
                'hue-1':'700'
            })
            .warnPalette('grey', {
                'default':'200',
                'hue-1':'300'
            })
            .backgroundPalette('grey');

        $mdIconProvider
            .icon("place","app/icons/ic_place_black_24px.svg")
            .icon("phone","app/icons/ic_local_phone_black_24px.svg")
            .icon("school","app/icons/ic_school_black_24px.svg")
            .icon("search", "app/icons/ic_search_black_48px.svg")
            .icon("responsive-ad", "app/icons/responsive-ad.svg");
    }]);
    

var appControllers = angular.module('Controllers', []);
var appServices = angular.module('Services', []);