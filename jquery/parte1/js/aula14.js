$(document).ready(function(){
	$("span").click(function(){
		//$("div #msg").text("click").css("color", "blue");
	}).dblclick(function(){
				$("div #msg").text("Click duplo").css("color", "red");
	}).mouseover(function(){
		$("div #msg").text("Mouse Over").css("color", "white");
	}).mouseout(function(){
		$("div #msg").text("Mouse Out").css("color", "black");
	}).mouseup(function(){
		$("div #msg").text("Mouse Up").css("color", "green");
	}).mousedown(function(){
		$("div #msg").text("Mouse Down").css("color", "yellow");
	}).mousemove(function(param){
		$("div #msg").text(
		"X = " + param.clientX + " Y = " + param.clientY)
		.css("color", "black");
	});
});