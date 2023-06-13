$(document).ready(function(){
	$("span").click(function(){
		
		// alert($("img").attr("title"));
		// alert($("img").attr("src"));
		
		// alert($("img").attr("src"));
		// $("img").attr("src", "img/lampada-acesa.png").attr("title","Lâmpada Acesa");
		
		//faz a memsa coisa do exemplo acima
		$("img").attr({
			src:"img/lampada-acesa.png",
			title:"Lâmpada Acesa"
			
		});
		
		//$("img").removeAttr("src"); //apaga o atributo - tem qu ser removeAttr
		
		//$("img").removeAttr("src").removeAttr("title").removeAttr("alt");
		
		// alert($("img").hasClass("destaque"));
		// $("img").addClass("destaque");
		// alert($("img").hasClass("destaque"));
		
		// $("img").toggleClass("destaque");//alterna toda vez que clica

		
	});
});