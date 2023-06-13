
window.onload = function(){
	document.getElementById("xti").onclick = ligar;
	setInterval(apresentaHoras, 10);
	
	var nome = readCookie("nome");
	console.log(nome);
	if (nome == null) {
		nome = prompt("Qual o seu nome?");
		console.log(nome);
		if (nome !== null && nome !== "") {
			writeCookie("nome", nome, 1);
			console.log("Salvo!");
		}
		alert(readCookie("nome"));
	} 
	
}

function ligar(){
	console.log(nome);
	var nome = readCookie("nome");
	console.log(nome);
	if(nome !=null){
		alert("É bom estar com você, " + nome);
	}
	document.getElementById("xti").src = "img/lampada-acesa.png";
	document.body.style.background = "#fff2b2";
	setTimeout(desligar, 3000);
	
}

function desligar(){
	document.getElementById("xti").src = "img/lampada-apagada.png";
	document.body.style.background = "#708090";
}

function apresentaHoras(){
	var agora = new Date();
	var horas = agora.getHours() + ":" + agora.getMinutes() + ":" + agora.getSeconds();
	document.getElementById("horas").innerHTML = horas;
}