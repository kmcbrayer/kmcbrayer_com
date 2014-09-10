'use strict';

angular.module('regUstratorApp')
  .controller('MainCtrl', function ($scope,sceneData,utils) {
    sceneData.cameraView = 'perspective';
    $scope.textAreaString = "\
    <box props=\"box2\"></box>\n\
    <box options=\"{'x':3,'y':2,'z':3,'color':100}\"></box>\n\
    <line props=\"line1\"></line>\n\
    <line options=\"{'x1':0,'y1':-10,'x2':0,'y2':10}\"></line>\n\
    <line options=\"{'x1':0,'z1':-10,'x2':0,'z2':10}\"></line>\n\
    <triangle options=\"{'x1':-3,'x2':-6,'x3':0}\"></triangle>\n\
    <text>This is text</text>\
    ";
    $scope.submitCode = function() {
        //format $scope.textAreaString into html
        //add pre:
        //  <screen id="main_screen"></screen>
        //  <camera></camera>
        //add post:
        //  <text>This is text</text>
        sceneData.render();
    };

    $scope.toggleCamera = function(){
    	sceneData.cameraView = (sceneData.cameraView === 'perspective') ? 'fPerson' : 'perspective';
    	if (sceneData.cameraView === 'perspective'){
            utils.cleanCam();
    		utils.makeOrbitCam();
    	}else{
            sceneData.controls = new THREE.PointerLockControls(sceneData.camera);
            utils.makeFPersonCam();
    	}
    };
  });
