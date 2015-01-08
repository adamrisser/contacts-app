'use strict';

angular
  .module('app.members', [])
  .directive('memberDetails', function() {
    return {
      restrict: 'AE',
      templateUrl: 'members/member-tpl.html'
    };
  })
  .controller('MembersCtrl', ['$scope', '$http', function ($scope, $http) {

    $http
      .get('data/contacts.json')
      .success(function (data) {
        $scope.members = data;
      });

}]);
