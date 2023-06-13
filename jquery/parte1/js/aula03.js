/* $(document).ready(function(){
	//encadeado
	$("a").css("color", "red")
		.click(function(){
				$("#titulo").css("color", "#0000FF");
				$("#titulo").text("Curso de JQuery");
				//Encadeado
				$("#titulo").hide().fadeToggle();
		});
	$("h1").hover(function(){
		$(this).css("color","yellow");
	}, function(){
		$(this).css("color", "black");
	});
	
}); */


//-----------------------//Seletores Simples//-----------------------//

$(document).ready(function(){
	//$("*").css("color", "red"); //tudo vermelho
	$("#titulo").css("color", "green");
	$("a").css("color","red"); //a ordem importa
	$(".outro").css("color", "black");
	$("h1, a").css("background-color", "yellow");
});

//-----------------------//Seletores Hierárquicos//-----------------------//

