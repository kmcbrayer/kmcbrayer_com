'use strict';

angular.module('regUstratorApp')
  .controller('MainCtrl', function ($rootScope, $scope, sceneData, utils, textAreaService, 
              boxDefaults, lineDefaults,triangleDefaults,textDefaults) {
    sceneData.cameraView = 'perspective';
    $scope.textAreaString = textAreaService.textAreaString;
    $scope.eleTypeList = [
      {'name':'Box'},{'name':'Line'},{'name':'Triangle'},{'name':'Text'}
    ];
    $scope.eleSelected = $scope.eleTypeList[0];
    $scope.elementList = []; 

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
        var end1 = "}\">";
        var end2 = "</text>";
        var elements = $("#textOptions :input");
        $scope.addTextString(elements,base,end1,end2);
      }
    };
    $scope.clearElements = function() {
      $scope.textAreaString = "";
      textAreaService.textAreaString = $scope.textAreaString;
      $rootScope.$broadcast('textUpdated');
    };
    $scope.addTextString = function(elements,base, end1,end2) {
      var ops = '';
      var innerText = 'default';
      elements.each(function(i){
        if ($(this).context.name == 'text'){
          innerText = $(this).context.value;
        }
        ops += "\'"+$(this).context.name+"\' : "+$(this).context.value+",";
      })
      $scope.textAreaString += base+ops.substr(0,ops.length-1)+end1+innerText+end2;//trim last comma
      $scope.submitCode();
    }
    $scope.addString = function(elements, base,end) {
      var ops = '';
      elements.each(function(i){
        ops += "\'"+$(this).context.name+"\' : "+$(this).context.value+",";
      });
      $scope.textAreaString += base+ops.substr(0,ops.length-1)+end;//trim last comma
      $scope.submitCode();
    }

  });
