
window.onload = function(){
	
	
	 var div = document.getElementsByTagName("div").item(0);
	// alert(div);//elemento
	// alert(div.parentNode);//pai
	// alert(div.childNodes);//filhos
	
	// var ul = div.childNodes.item(0);
	// alert(ul);//primeiro filho
	// alert(ul.nodeName);
	// alert(ul.nodeType);//1=Elemento - 2=Atributo - 3=Texto
	
	// alert(ul.childNodes.length);
	// alert(ul.firstChild);
	// alert(ul.lastChild);
	
	// alert(ul.firstChild.firstChild.nodeValue);
	
	// var li = ul.firstChild.lastChild.childNodes[1];
	// alert(li,firstChild.nodeValue);
	// alert(li.previousSibling.firstChild.nodeValue);
	// alert(li.nextSibling.firstChild.nodeValue);
	
	// alert(div.firstChild.firstChild.lastChild.lastChild
	//.lastChild.firstChild.firstChild.nodeValue);
	
	
	
	
	var hr = document.createElement("hr");
	div.appendChild(hr);
	
	// var h1 = document.createElement("h1");
	// div.appendChild(h1);
	
	// h1.appendChild(document.createTextNode("Teste"));
	// div.firstChild.appendChild(h1);
	
	// var atributo = document.createAttribute("style");
	// atributo.value="color:blue";
	// h1.setAttributeNode(atributo);
	// h1.setAttribute("style","colr:blue");
	
	// var select = document.createElement("select");
	// select.setAttribute("id", "estados");
	// var option = document.createElement("option");
	// option.setAttribute("value","DF");
	// option.appendChild(document.createTextNode("Distrito Federal"));
	
	// var option2 = document.createElement("option");
	// option2.setAttribute("value","SP");
	// option2.appendChild(document.createTextNode("São Paulo"));
	
	// select.appendChild(option);
	// div.appendChild(select);
	
	// select.appendChild(option2);
	
	// div.appendChild(select);
	
	// var del = div.firstChild;
	// div.removeChild(del);
	
	// var select2 = select.cloneNode(true);
	// div.appendChild(select2);
	
}