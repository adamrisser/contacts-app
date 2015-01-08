'use strict';

angular.module('app.members', [])

  .directive('memberDetails', function () {
    return {
      restrict: 'AE',
      templateUrl: 'members/member-tpl.html'
    };
  })

  .factory('members', ['$http', function ($http) {
    return $http
      .get('data/contacts.json')
      .then(function (response) {
        return response.data;
      });
  }])

  .controller('MembersCtrl', ['$scope', 'members', function ($scope, members) {
    $scope.members = members;
  }]);
