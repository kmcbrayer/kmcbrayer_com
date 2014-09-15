'use strict';

angular.module('regUstratorApp')
  .controller('MainCtrl', function ($rootScope, $scope, sceneData, utils, textAreaService, boxDefaults) {
    sceneData.cameraView = 'perspective';
    $scope.textAreaString = textAreaService.textAreaString;
    $scope.submitCode = function() {
      textAreaService.textAreaString = $scope.textAreaString;
      $rootScope.$broadcast('textUpdated');
    };
    $scope.addElement = function() {
      if ($scope.eleSelected.name === 'Box') {
        //get input names and values
        var base = "<box options=\"{";
        var end = "}\"></box>";
        $scope.addString(base,end);
      }
    };
    $scope.clearElements = function() {
      $scope.textAreaString = "";
      textAreaService.textAreaString = $scope.textAreaString;
      $rootScope.$broadcast('textUpdated');
    };
    $scope.eleList = [
      {'name':'Box'},{'name':'Line'},{'name':'Triangle'},{'name':'Text'}
    ];
    $scope.eleSelected = $scope.eleList[0];

    $scope.boxDefaults = boxDefaults;

    $scope.addString = function(base,end) {
      var ops = '';
      $(".ele_options").each(function(i){
        ops += "\'"+$(this).context.name+"\' : "+$(this).context.value+","
      });
      $scope.textAreaString += base+ops.substr(0,ops.length-1)+end;//trim last comma
      $scope.submitCode();
    }

  });
