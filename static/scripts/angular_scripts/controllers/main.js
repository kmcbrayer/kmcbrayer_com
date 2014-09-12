'use strict';

angular.module('regUstratorApp')
  .controller('MainCtrl', function ($rootScope, $scope, sceneData, utils, textAreaService) {
    sceneData.cameraView = 'perspective';
    $scope.textAreaString = textAreaService.textAreaString;
    
    $scope.submitCode = function() {
        textAreaService.textAreaString = $scope.textAreaString;
        $rootScope.$broadcast('textUpdated');
    };

  });
