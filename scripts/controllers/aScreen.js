'use strict';

/**
 * @ngdoc function
 * @name mhfApp.controller:AScreen
 * @description
 * # AScreen
 * Controller of the mhfApp
 */
angular.module('mhfApp')
    .controller('AScreen', ['$scope', '$mdDialog',
        function ($scope, $mdDialog) {
            $scope.close = function () {
                return $mdDialog.hide();
            };
        }
    ])
;



