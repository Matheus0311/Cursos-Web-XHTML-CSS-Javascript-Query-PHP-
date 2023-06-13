$(document).ready(function(){
	$("span:eq(0)").click(function(){
		// $("div #msg").fadeOut(1000);
		// $("div #msg").fadeIn(1000);
		// $("div #msg").fadeTo(1000, 0.5);
		$("div #msg").fadeToggle(1000);
	});
	
	$("span:eq(1)").click(function(){
		// $("div #msg").slideUp(1000);
		// $("div #msg").slideDown(1000);
		$("div #msg").slideToggle("fast");
	});
});