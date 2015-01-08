'use strict';

// Declare app level module which depends on views, and components
angular
  .module('app', [
    'ui.router',
    'app.members',
    'app.view2'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    //$urlRouterProvider.otherwise('/members');

    $stateProvider
      .state('members-list', {
        url: '/members',
        templateUrl: 'members/members-tpl.html',
        controller: 'MembersCtrl'
      })
      // .state('state2', {
      //   url: '/view2',
      //   templateUrl: 'view2/view2.html',
      //   controller: 'View2Ctrl'
      // });

  }]);
