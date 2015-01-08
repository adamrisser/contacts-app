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

  .filter('offset', function () {
    return function(arr, start) {
      return arr.slice(start);
    };
  })

  .controller('MembersCtrl', ['$scope', 'members', function ($scope, members) {
    $scope.members = members;
    $scope.states = ['AK','AL','AR','AZ','CA','CO','CT','DC','DE','FL','GA','GU','HI','IA','ID', 'IL','IN','KS','KY','LA','MA','MD','ME','MH','MI','MN','MO','MS','MT','NC','ND','NE','NH','NJ','NM','NV','NY', 'OH','OK','OR','PA','PR','PW','RI','SC','SD','TN','TX','UT','VA','VI','VT','WA','WI','WV','WY'];

    // data to control the displayed members
    $scope.search = {
      name: '',
      state: '',
      limit: 10,
      currentPage: 1
    };

    $scope.byName = function (member) {
      var first = member.first_name.toLowerCase();
      var last  = member.last_name.toLowerCase();
      var name  = $scope.search.name.toLowerCase();

      return first.indexOf(name) >= 0 || last.indexOf(name) >= 0;
    };

    $scope.reset = function () {
      $scope.search.currentPage = 1;
    };

  }]);
