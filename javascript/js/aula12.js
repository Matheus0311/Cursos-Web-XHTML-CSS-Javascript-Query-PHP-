

//------------------>Funcção Declarativa<-----------------------------

/* function somar(x, y){
	alert(x+y);
}
for(var i = 0; i<10; i++){
	somar(i, i+1);
}
 */
 
//------------------>Função Anônima<-----------------------------

/* 
var somar2 = new Function ("x", "y", "alert(x+y);");

somar2(2, 9); */

//------------------>Função Literal<-----------------------------

/* 
var somar3 = function(x,y){
	alert(x+y);
}

somar3(4,5); */

document.getElementById("l").onclick = function(){
	alert("teste");
}