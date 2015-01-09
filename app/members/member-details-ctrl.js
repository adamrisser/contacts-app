'use strict';

angular.module('app.memberDetails', [])

  .controller('MemberDetailsController', ['$scope', '$modalInstance', 'member', function ($scope, $modalInstance, member) {

    $scope.member = member;

  }]);
