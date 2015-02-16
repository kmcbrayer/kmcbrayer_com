'use strict';

angular.module('regUstratorApp')
  .controller('MainCtrl', function ($rootScope, $scope, sceneData, utils, textAreaService) {
    sceneData.cameraView = 'perspective';
    $scope.textAreaString = textAreaService.taString;
    
    $scope.submitCode = function() {
        textAreaService.taString = $scope.textAreaString;
        $rootScope.$broadcast('textUpdated');
    };

  });
