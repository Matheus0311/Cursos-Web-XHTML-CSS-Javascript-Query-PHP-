$(document).ready(function(){
	$("span").click(function (){

//-------------=>remove<=----------------

//remove elementos alvos
		// $("h1").remove();
		// $("h1").remove("#titulo"); 
		
//-------------=>empty<=----------------

//remove elementos internos
		//$("ul").empty();
		
//-------------=>unwrap<=----------------

//remove o elemento envolvente
		$("ul").unwrap();
		
	});
	
	$("ul").append("<li>Dentro e na última posição</li>");
		
	$("ul").prepend("<li>Dentro e na primeira posição</li>");
	
	$("ul").before("<h1 id='titulo'>Fora e antes do elemento</h1>");
	
	$("ul").after("<h1>Fora e depois do elemento</h1>");
	
	$("ul").wrap("<span>");
	
	// $("ul").append($("li").clone());
	
});