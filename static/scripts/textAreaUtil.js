'use strict';

$(document).ready(function() {
	var w = $(window).height()-182;
	$('#textArea').height(w);
});

$(window).resize(function() {
	var w = $(window).height()-182;
	$('#textArea').height(w);
})