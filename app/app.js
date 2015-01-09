'use strict';

// Declare app level module which depends on views, and components
angular
  .module('app', [
    'ui.router',
    'ui.bootstrap',
    'app.members',
    'app.memberDetails'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/members');

    $stateProvider
      .state('members-list', {
        url: '/members',
        controller: 'MembersController',
        templateUrl: 'members/members-tpl.html',
        resolve: {
          members: 'members'
        }
      });
  }]);
