
var app = angular.module('ngApp',['ui.router']);
app.config(config);

function config($stateProvider, $urlRouterProvider) {

  $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        //controllerAs: 'ctrl'
      })    
      .state('secondpage', {
        url: '/secondpage',
        templateUrl: 'views/secondpage.html',
        controller: 'secondpageCtrl',
        controllerAs: 'ctrl'
      })  
      $urlRouterProvider.otherwise('/');

    
}

app.run(run);
run.$inject = ['$rootScope','$location'];

function run($rootScope){
}

app.controller('HomeCtrl',function ($scope, $rootScope) {
	
  console.log("Home controller loaded");

});

app.controller('secondpageCtrl',function ($scope, $rootScope) {
	
	console.log('secondpage controller loaded');
  
});
