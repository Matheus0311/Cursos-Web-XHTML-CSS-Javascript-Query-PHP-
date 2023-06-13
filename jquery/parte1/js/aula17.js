$(document).ready(function(){
	$("span:eq(0)").click(function(){
		// $("div #msg").hide();
		// $("div #msg").hide("slow");
		// $("div #msg").hide("fast");
		// $("div #msg").hide("normal");
		$("div #msg").hide(1000);
	});
	$("span:eq(1)").click(function(){
		// $("div #msg").show();
		//  $("div #msg").show("slow");
		// $("div #msg").show("fast");
		// $("div #msg").show("normal");
		 $("div #msg").show(1000);
	});
	$("span:eq(2)").click(function(){
		// $("div #msg").toggle();
		//  $("div #msg").toggle("slow");
		// $("div #msg").toggle("fast");
		// $("div #msg").toggle("normal");
		 $("div #msg").toggle(1000);
	});
});