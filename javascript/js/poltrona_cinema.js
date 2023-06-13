var poltronas = [false, true, false, true, true, true, false, true, false, true];
var imagens = document.getElementsByTagName("img");

window.onload = function(){
	carregarPoltronas();

	for(var i = 0; i<imagens.length; i++){
		imagens[i].onclick=verificaStatus(i);
	}
}

function verificaStatus(poltronas){
	return function(){
		var src = (document.getElementsByTagName("img")[poltronas].src);	
		var msg="";
		if(src.indexOf("img/cadeira.png") > 0){
			msg = "Poltrona Disponível";
		}else if(src.indexOf("img/cadeira_indisponivel.png") > 0){
			msg = "Poltrona Indisponível";
		}else{
			msg = "Está Poltrona é Sua!";
		}
		alert(msg);
	}
}

function carregarPoltronas(){
	for(var i = 0; i<imagens.length; i++){
		if(poltronas[i]){
			imagens[i].src = "img/cadeira.png";
		}else{
			imagens[i].src = "img/cadeira_indisponivel.png";
		}
		
	}
}

function selecionarPoltrona(){
	var imagens = document.getElementsByTagName("img");
	for(var i = 0; i<poltronas.length; i++){
		if(poltronas[i]){
			imagens[i].src = "img/cadeira_selecionada.png";

			var quer = confirm("Você quer esta poltrona?");
			if(quer){
				break;
			}else{
				imagens[i].src = "img/cadeira.png";
			}
		}
	}
}

function selecionarPoltronaCasal(){
	
	for(var i = 0; i<poltronas.length; i++){
		if(poltronas[i] && poltronas[i+1]){
			imagens[i].src = "img/cadeira_selecionada.png";
			imagens[i+1].src = "img/cadeira_selecionada.png";
		
			var quer = confirm("Você quer estas poltronas?");
			if(quer){
				break;
			}else{
				imagens[i].src = "img/cadeira.png";
				imagens[i+1].src = "img/cadeira.png";
			}
		}
	}
}


