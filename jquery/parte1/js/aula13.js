$(document).ready(function(){
	$("span").click(function (){
		
		/* $("img").css({
			width:"300px;",
			background:"#00FF00",
			border:"30px solid  #B22222"
		}); */
		
		// alert($("img").hasClass("imagem"));
		
		// $("img").removeClass("imagem");
		
		 $("img").addClass("destaque");
		
		
		//	LARGURA E ALTURA
		
		// alert("largura = " + $("img").css("width") + 
		// "\naltura =  " + $("img").css("height"));
		
		// alert("largura = " + $("img").innerWidth() + 
		 // "\naltura =  " + $("img").innerHeight());
		 
		 // alert("largura = " + $("img").outerWidth() + 
		 // "\naltura =  " + $("img").outerHeight());
		 
		//	POSITION
		
		alert($("img").position().top);
		alert($("img").position().left);
		alert($("img").offset().top);
		alert($("img").offset().left);
		
	});
	
	
	
});