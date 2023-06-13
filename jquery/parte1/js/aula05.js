

//-----------------------//Seletores de Filtros Básicos//-----------------------//
// $(document).ready(function(){
		// $("tbody tr:first").css("background", "#CCC");//primeira tr
		// $("tbody tr:last").css("background", "#CCC");//ultima tr
		// $("tbody tr:not(tbody tr:last)")
		// .css("background", "#CCC");//todas as tr menos a ultima tr
		
		// $("tbody tr:even").css("background", "#CCC");//listrado em par
		// $("tbody tr:odd").css("background", "#CCC");//listrado em ímpar
		// $("tbody tr:eq(3)").css("background", "#CCC");//colore a posição
		// $("tbody tr:gt(2)").css("background", "#CCC");//colore as posições posteriores
		// $("tbody tr:lt(2)").css("background", "#CCC");//colore as posições anteriores

		
		/* $("#button1").click(function(){
			$("tbody tr:even").css("background","#CCC");
		}); 
		$("#button2").click(function(){
			$("tbody tr:odd").css("background","orange");
		});  */
// });

//-----------------------//Seletores de Conteúdo//-----------------------//

$(document).ready(function(){
	$("td:contains(Carandiru)").css("background", "#CCC");
	$("td:contains(Comédia)").css("background", "#CCC");
	$("td:empty").css("background", "#CCC");// pinta todas as vazias
	$("td:not(td:empty)").css("background", "#FFA500");// pinta todas que não estão vazias
	$("td:has(strong)").css("background", "pink");// pinta todas que tenham certa tag
	
});

