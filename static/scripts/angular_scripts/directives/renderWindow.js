'use strict';

angular.module('regUstratorApp')
  .directive('renderWindow', function (textAreaService, $sce, $compile) {
  	return {
      restrict: 'E',
      replace: true,
      link: function(scope, elm, attrs) {
      	var convertedText = "\
        <screen id=\"main_screen\"></screen>\n\
        <camera></camera>\n" +textAreaService.taString +"\n\
        <renderer></renderer>\
        ";
        elm.html(convertedText);
        $compile(elm.contents())(scope);
        scope.$on('textUpdated', function() {
        	var convertedText = "\
	        <screen id=\"main_screen\"></screen>\n\
	        <camera></camera>\n" +textAreaService.taString +"\n\
	        <renderer></renderer>\
	        ";
	        elm.html(convertedText);
	        $compile(elm.contents())(scope);
        });
      }
    }
  });