$(document).ready(function(){
	
//-----------------------//Seletores Hierárquicos//-----------------------//

//-----------------------//Seletores Desscendentes//-----------------------//

	//$("div ul").css("background-color", "yellow");
	//$("div span").css("background-color", "yellow");
	
//-----------------------//Seletores de Filhos//-----------------------//

	$("li > ul").css("color", "red");
	
//-----------------------//Seletores de Irmãos//-----------------------//

	$("#item1_1 + li").css("color", "blue");//apenas no próximo irmão
	
	$("#item1_1 ~ li").css("color", "blue");//todos os outros irmãos
	
});