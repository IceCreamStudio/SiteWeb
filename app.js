var app = angular.module('iceCreamStudio', []);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/about', {templateUrl: 'about.html',   controller: aboutCtrl }).
      when('/work', {templateUrl: 'work.html',   controller: workCtrl }).
      when('/contact', {templateUrl: 'contact.html',   controller: contactCtrl }).
      otherwise({redirectTo: '/'});
}]);

app.controller('mainCtrl', function($scope){
    var body = angular.element( document.querySelector( 'body' ) );
    body.addClass('red');
});


function TabsCtrl($scope, $location) {
  $scope.tabs = [
      { link : '#/about', label : 'About' },
      { link : '#/work', label : 'Work' },
      { link : '#/contact', label : 'Contact' }
    ];

  $scope.selectedTab = $scope.tabs[0];
  $scope.setSelectedTab = function(tab) {
    $scope.selectedTab = tab;
  }

  $scope.tabClass = function(tab) {
    if ($scope.selectedTab == tab) {
      return "active";
    } else {
      return "";
    }
  }
}


function aboutCtrl($scope) {
    var body = angular.element( document.querySelector( 'body' ) );
    var lastClass = body.attr('class').split(' ').pop();
    body.removeClass(lastClass);
    body.addClass('bodyAbout');

}

function workCtrl($scope) {
    var body = angular.element( document.querySelector( 'body' ) );
    var lastClass = body.attr('class').split(' ').pop();
    body.removeClass(lastClass);
    body.addClass('bodyWork');

}

function contactCtrl($scope) {
    var body = angular.element( document.querySelector( 'body' ) );
    var lastClass = body.attr('class').split(' ').pop();
    body.removeClass(lastClass);
    body.addClass('bodyContact');
}
