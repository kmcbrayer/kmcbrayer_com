'use strict';

angular.module('regUstratorApp')
  .factory('textAreaService', function() {
  	var taString = "\
    <box props=\"box2\"></box>\n\
    <box options=\"{'x':3,'y':2,'z':3,'color':200}\"></box>\n\
    <line props=\"line1\"></line>\n\
    <line options=\"{'x1':0,'y1':-10,'x2':0,'y2':10}\"></line>\n\
    <line options=\"{'x1':0,'z1':-10,'x2':0,'z2':10}\"></line>\n\
    <triangle options=\"{'x1':-3,'x2':-6,'x3':0}\"></triangle>\n\
    <text>This is text</text>\
    ";
  	return {
  		textAreaString: taString
  		
  	}
  })