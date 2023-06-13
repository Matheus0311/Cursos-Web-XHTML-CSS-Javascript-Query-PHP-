//Declarações e Estruturas

/* function dividir(x, y){
	//var a =  x/y;
	//alert(a);
	return x/y;
}

alert(dividir(6,2)); */


//Estruturas Condicionais

//------------------------->if else<------------------------------------

/* var numero = 18;
if((numero % 2) == 0){
	alert("par");
} */

/* var passou  = false;
if(passou){
	alert("Contratado(a)");
}else{
	alert("Continue estudando");
} */

//------------------------->Ternário<------------------------------------

/* var passou = true;
passou ? (alert("Contratado(a)")):(alert("Continue estudando"));
 */
 
/*  var idade = 78;
 if(idade <= 11)
{
	alert("Criança");
}
else if(idade > 11 && idade <= 16)
{
	alert("Pré-Adolescente");
}
else if(idade > 16 && idade <=21)
{
	alert("Adolescente");
}
else if(idade > 21 && idade <=60)
{
	alert("Adulto");
}
else if(idade > 60)
{
	alert("idoso");
} */
 
/* var nota = 5;
 if(nota >= 7)
{
	alert("Passou");
}
else
{
	if(nota == 6){	
		alert("Recuperação");
	}
	else{
		alert("Reprovado");
	}
} */

//------------------------->switch case<------------------------------------

/* var sexo = "m";
switch(sexo){
	case "M":
	case "m":
		alert("Macho");
		break;
	case "F":
	case "f":
		alert("Fêmea");
		break;
	default:
		alert("Indefinido");
} */


//Estrutuas de Repetição

//------------------------->for<------------------------------------


/* var texto = "";
for(var i=1; i<=20; i++){
	if((i%2)==0){
		
		if(i==20){
			texto += i;
			break;
		}
		texto += i + " - ";
		
		// if(i==20){
			// texto += i;
		// }else{
			// texto += i + " - ";
		// } 
	}
}
alert(texto); */

//------------------------->for in<------------------------------------

/*var numeros = new Array("um", "dois", "três");
 for(i in numeros){
	alert(numeros[i]);
} */

/* var Carro = 
{
	marca: "Nissan",
	modelo: "350Z",
	comprimento: "3.345mm",
	velocidade: "320km/h",
	cavalos: "350cv"
}
for(var props in Carro){
	alert(props + " = " + Carro[props]);
} */

//------------------------->while<------------------------------------

/* var i = 0;
while(i<3){
	alert(i);
	i++;
} */

/* var i = 0;
var texto = "";
while(i<3){
	texto += i;
	i++;
}
alert(texto); */

//------------------------->do while<------------------------------------

/* var i=0;
do{
	alert(i);
	i++;
}while(i<3); */

/* 
}while(false);
 */
 
 //------------------------->Tratament de Exceções<------------------------------------
 
 //------------------------->try catch<------------------------------------

/* try{
	var x = a;
	var b = x + 10;
	alert(b);
	
}catch(e){
	//alert(e.name + " - " + e.message);
	alert(e.toString());
} */

 //------------------------->try throw catch<------------------------------------

/* var x = prompt("Informe um número maior que 10");
try{
	if(x < 10){
		throw "Número menor que 10";
	}
	alert(x);
	
}catch(e){
	//alert(e.name + " - " + e.message);
	alert(e);
}  */

 //------------------------->with para criar contexto<------------------------------------

/* var Carro = 
{
	marca: "Nissan",
	modelo: "350Z",
	potencia:{
		cavalos: "350cv",
		velocidade: "320km/h"
	}	
}
//alert(Carro.potencia.cavalos);

with (Carro.potencia){
	alert(cavalos);
	alert(velocidade);
} */