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
    $scope.limit = 10;
    $scope.states = ['AK','AL','AR','AZ','CA','CO','CT','DC','DE','FL','GA','GU','HI','IA','ID', 'IL','IN','KS','KY','LA','MA','MD','ME','MH','MI','MN','MO','MS','MT','NC','ND','NE','NH','NJ','NM','NV','NY', 'OH','OK','OR','PA','PR','PW','RI','SC','SD','TN','TX','UT','VA','VI','VT','WA','WI','WV','WY'];
  }]);
