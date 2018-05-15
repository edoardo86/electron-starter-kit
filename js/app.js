
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
      .state('product-list', {
        url: '/product-list',
        templateUrl: 'views/product-list.html',
        controller: 'ProductCtrl',
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

app.controller('ProductCtrl',function ($scope, $rootScope) {
	
	console.log('product controller loaded');
  
});

app.controller('LocationCtrl',function ($scope) {
	
	console.log('location controller loaded');

});
