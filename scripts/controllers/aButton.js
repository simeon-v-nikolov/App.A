'use strict';

/**
 * @ngdoc function
 * @name mhfApp.controller:AButton
 * @description
 * # AButton
 * Controller of the mhfApp
 */
angular.module('mhfApp')
    .controller('AButton', ['$scope', '$mdDialog',
        function ($scope, $mdDialog) {
            $scope.onClickA = function () {
                return $mdDialog.show({
                    templateUrl: '../App.A/views/aScreen.html',
                    controller: 'AScreen',
                });
            };
        }
    ])
;



