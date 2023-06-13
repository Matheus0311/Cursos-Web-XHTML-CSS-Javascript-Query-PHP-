window.onload = function(){
	document.getElementById("botao").onclick = function(){
		
		requisitar("ajax/arquivo.xml");
		return false;
		
	} 
	
	
	function mostrar(ajax){
		var r = document.getElementById("resposta");
		var xml = new XML(ajax.responseText);
		r.appendChild(document.createTextNode(xml.url));
	}
	
	function requisitar(url){
		var ajax = iniciaAjax();
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4){
				mostrar(ajax);
			}
		}
		ajax.open("POST", url);
		ajax.send(null);
	}
	
	function iniciaAjax(){
		var ajax = null;
		if(window.XMLHttpRequest){
			ajax = new XMLHttpRequest();
		}else if(window.ActiveXObject){
			try{
				ajax = new ActiveXObject("Msxm12.XMLHTTP");
			}catch(e){
				ajax = new ActiveXObject("Microsoft.XMLHTTP");
			}
		}
		return ajax;
	}
}
