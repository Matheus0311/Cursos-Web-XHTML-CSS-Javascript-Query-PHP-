$(document).ready(function(){
	
	/* $(":text").keyup(function(e){
		$("#msg").text($(this).val());
	}); */
	
	/* $(":text").bind("keyup", function(e){
		$("#msg").text($(this).val());
	}); */
	
	/* function msg(e){
		$("#msg").text($(this).val());
	}
	$(":text").bind("keyup", msg); */
	
	/* function msg(e){
		$("#msg").text($(this).val());
	}
	$(":text").bind("keyup focus blur", msg); */
	
	function msg(e){
		$("#msg").text($(this).val());
	}
	// $(":text").keyup(msg).focus(msg).blur(msg);
	// $(":text").bind("keyup focus blur", msg);
	
	$("fieldset").delegate(":text", "keyup", msg);
	 
	// $(":button").bind("click", function(e){
	
		//$("fieldset").prepend("Outro<input type='text' id='text' name='text'><br><br>");
		
		/* $(":text").unbind("keyup",msg);
		
		$(":text").val("Texto Incluido Via jQuery");
		$(":text").trigger("focus");
		 */
	//});
	$(":button").bind("click", function(e, src, width){
		$("#msg").append($("<img/>").attr("src", src).css("width", width));
	});
	$(":button").trigger("click",["img/bichinho.png","100px"]);
});