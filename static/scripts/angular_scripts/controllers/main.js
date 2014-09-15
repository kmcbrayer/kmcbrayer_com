'use strict';

angular.module('regUstratorApp')
  .controller('MainCtrl', function ($rootScope, $scope, sceneData, utils, textAreaService, 
              boxDefaults, lineDefaults,triangleDefaults,textDefaults) {
    sceneData.cameraView = 'perspective';
    $scope.textAreaString = textAreaService.textAreaString;
    $scope.eleList = [
      {'name':'Box'},{'name':'Line'},{'name':'Triangle'},{'name':'Text'}
    ];
    $scope.eleSelected = $scope.eleList[0];

    $scope.boxDefaults = boxDefaults;
    $scope.lineDefaults = lineDefaults;
    $scope.triangleDefaults = triangleDefaults;
    $scope.textDefaults = textDefaults;


    $scope.submitCode = function() {
      textAreaService.textAreaString = $scope.textAreaString;
      $rootScope.$broadcast('textUpdated');
    };
    $scope.addElement = function() {
      if ($scope.eleSelected.name === 'Box') {
        //get input names and values
        var base = "<box options=\"{";
        var end = "}\"></box>";
        var elements = $("#boxOptions :input");
        $scope.addString(elements,base,end);
      }
      if ($scope.eleSelected.name === 'Line') {
        //get input names and values
        var base = "<line options=\"{";
        var end = "}\"></line>";
        var elements = $("#lineOptions :input");
        $scope.addString(elements,base,end);
      }
      if ($scope.eleSelected.name === 'Triangle') {
        //get input names and values
        var base = "<triangle options=\"{";
        var end = "}\"></triangle>";
        var elements = $("#triangleOptions :input");
        $scope.addString(elements,base,end);
      }
      if ($scope.eleSelected.name === 'Text') {
        //get input names and values
        var base = "<text options=\"{";
        var end = "}\"></text>";
        var elements = $("#textOptions :input");
        $scope.addString(elements,base,end);
      }
    };
    $scope.clearElements = function() {
      $scope.textAreaString = "";
      textAreaService.textAreaString = $scope.textAreaString;
      $rootScope.$broadcast('textUpdated');
    };

    $scope.addString = function(elements, base,end) {
      var ops = '';
      elements.each(function(i){
        ops += "\'"+$(this).context.name+"\' : "+$(this).context.value+","
      });
      $scope.textAreaString += base+ops.substr(0,ops.length-1)+end;//trim last comma
      $scope.submitCode();
    }

  });
